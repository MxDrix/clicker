/*
Import
*/
    const UserModel = require('../../models/user.model')
    const bcrypt = require('bcryptjs');
    const { sendEmail } = require('../../services/mailer.service');
//

/*
Methods
*/
    /**
     * Register new User and user
     * @param body => email: String (unique), password: String
    */
    const register = body => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            UserModel.findOne( { email: body.email }, (error, user) => {
                if(error) return reject(error) // Mongo Error
                else if(user) return reject('User already exist')
                else{
                    // Encrypt user password
                    bcrypt.hash( body.password, 10 )
                    .then( hashedPassword => {
                        // Replace pasword
                        const clearPassword = body.password;
                        body.password = hashedPassword;

                        // Set creation and connection date
                        body.creationDate = new Date();
                        body.lastConnection = null;
                        body.isValidated = true;

                        // Register new user
                        UserModel.create(body)
                        .then( mongoResponse => {
                            // sendEmail(mongoResponse, clearPassword)
                            // .then( mailerResponse => {
                                resolve({ _id: mongoResponse._id, creationDate: mongoResponse.creationDate })
                            // })
                            // .catch( mailerResponse => {
                            //     reject(mailerResponse)
                            // })
                            
                        })
                        .catch( mongoResponse => reject(mongoResponse) )
                    })
                    .catch( hashError => reject(hashError) );
                };
            });
            
        });
    };

    /**
     * Confirm user User before login
     * @param body: Object => _id: String, password: String
    */
    const confirmUser = body => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            UserModel.findById( body._id, (error, user) => {
                if(error) return reject(error)
                else if(!user) return reject('Unknow User')
                else{
                    // Check password
                    const validPassword = bcrypt.compareSync(body.password, user.password);
                    if( !validPassword ) return reject('Password not valid')
                    else {
                        // Change User state
                        user.isValidated = true;

                        // Save identuty state
                        user.save()
                        .then( mongoResponse => resolve(mongoResponse) )
                        .catch( mongoResponse => reject(mongoResponse) )
                    };
                }
            } )
        })
    };

    /**
     * Login user
     * @param body: Object => email: String, password: String
    */
    const login = (body, res) => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            UserModel.findOne( { email: body.email }).select('+password').exec(function(error, user) {
                if(error) reject(error)
                else if(!user) reject('Unknow User')
                else{
                    if( !user.isValidated ){
                        return reject('Account is not validated')
                    }
                    else{
                        // Check password
                        const validPassword = bcrypt.compareSync(body.password, user.password);
                        if( !validPassword ) reject('Password is not valid')
                        else {
                            // Set cookie
                            res.cookie(process.env.COOKIE_NAME, user.generateJwt(user._id), { httpOnly: false });
                            
                            // Define user last connection
                            const lastConnection = user.lastConnection;

                            // Set user new connection
                            user.lastConnection = new Date();

                            // Save new connection
                            user.save( (error, user) => {
                                if(error) return reject(error)
                                else{
                                    return resolve({ _id: user._id, creationDate: user.creationDate, lastConnection: lastConnection });
                                };
                            });
                        };
                    };
                };
            });
        });
    };

    const logout = (res) => {
        return new Promise( (resolve, reject) => {
            res.clearCookie('ClickerToken');
            
            return resolve({ response: 'User token has been destroy' });
        });
    };

    /**
     * Set user password
     * @param body: Object => password: String, newPassword: String
    */
    const setPassword = (body, authUser, res) => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            UserModel.findById( authUser._id, (error, user) => {
                
                if(error) reject(error)
                else if(!user) reject('Unknow User')
                else{
                    
                    // Check password
                    const validPassword = bcrypt.compareSync(body.password, user.password);
                    if( !validPassword ) return reject('Password not valid')
                    else {
                        
                        // Encrypt user password
                        bcrypt.hash( body.newPassword, 10 )
                        .then( hashedPassword => {
                            // Set new password
                            user.password = hashedPassword;
                            
                            // Set cookie
                            res.cookie(process.env.COOKIE_NAME, user.generateJwt(user._id), { httpOnly: true });

                            // Save new password
                            user.save( (error, user) => {
                                if(error) return reject(error)
                                else{
                                    return resolve({ _id: user._id, creationDate: user.creationDate, lastConnection: user.lastConnection });
                                };
                            });
                        })
                        .catch( hashError => reject(hashError) );
                    };
                };
            });
        });
    };

    const readOneItem = (userId) => {
        return new Promise( (resolve, reject) => {
            UserModel.findById(userId, (error, user) => {
                if (error) return reject(error)
                else if (!user) return reject('User not found');
                else {
                    return resolve(user);
                }
            });
        });
    }

/*
Export
*/
    module.exports = {
        register,
        confirmUser,
        login,
        logout,
        setPassword,
        readOneItem
    }
//