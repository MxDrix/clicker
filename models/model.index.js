/* 
Definition
The object Model{} is used in main.controller
You need to add a new propetry for each Mongoose schema
*/
    const Models = {
        user: require('./user.model'),
        clicker: require('./clicker.model')
    };
//

/* 
Export
*/
    module.exports = Models;
//