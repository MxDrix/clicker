/* 
Definition
*/
    const Mandatories = {
        register: ['email', 'firstname', 'lastname', 'password'],
        idValidation: ['_id', 'password'],
        login: ['email', 'password'],
        changePassword: ['password', 'newPassword'],
        newClicker: ['nbClick']
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//