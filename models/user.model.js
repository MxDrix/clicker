/*
Import
*/
    // Mongoose
    const mongoose = require('mongoose')
    const { Schema } = mongoose;

    // Javascript Web Token
    const jwt = require('jsonwebtoken');
//

/*
Mongoose schema deefinition
Declare each property and type needed for the schema
*/
    const userSchema = new Schema({
        email: String,
        firstname: String,
        lastname: String,
        password: { type: String, select: false },
        isValidated: Boolean,
        creationDate: String,
        lastConnection: String
    })
//

/*
Method generateJwt()
Generate a user access token
*/
    userSchema.methods.generateJwt = idUser => {
        // The access token expired in 60 days
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 59);

        /**
         * JWT sign() method
         * @param object => all the data nedded for the access token
         * @param JWT_SECRET => secure key to hash the access token (cf. '.env')
         * @return => hashed user access token
        */
            return jwt.sign({
                _id: idUser,
                isValidated: this.password,
                creationDate: this.creationDate,
                lastConnection: this.lastConnection,
                expireIn: '10s',
                exp: parseInt(expiry.getTime() / 100, 10)
            }, process.env.JWT_SECRET );
        //
    }
//

/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
    const UserModel = mongoose.model('users', userSchema);
    module.exports = UserModel;
//