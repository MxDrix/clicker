/*
Imports
*/
    // Node
    const express = require('express');
    const authRouter = express.Router();

    // Inner
    const Mandatory = require('../../services/mandatory.service');
    const Vocabulary = require('../../services/vocabulary.service');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { checkFields } = require('../../services/request.service');
    const { register, confirmUser, login, setPassword, logout, readOneItem } = require('./auth.controller');
//

/*
Routes definition
*/
    class AuthRouterClass {

        // Inject Passport to secure routes
        constructor({ passport }) {
            this.passport = passport;
        }
        
        // Set route fonctions
        routes(){

            /**
             * POST Route to create new User
             * @param body: Object => email: String (unique), password: String
             * @callback => create User and associated user
            */
            authRouter.post( '/register', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatory.register, req.body );

                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else{
                    //=> Request is valid: use controller
                    register(req.body)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
                };
            });

            /**
             * POST Route to validate User
             * @param body: Object => _id: String, password: String
             * @callback => change User.isValidated to 'true'
            */
            authRouter.post( '/User-validation', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatory.idValidation, req.body );
                
                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else{
                    //=> Request is valid: use controller
                    confirmUser(req.body)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse) );
                };
            });

            /**
             * POST Route to login user
             * @param body: Object => email: String, password: String
             * @callback => send user _id and date informations
            */
            authRouter.post( '/login', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatory.login, req.body );

                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else{
                    //=> Request is valid: use controller
                    login(req.body, res)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse) );
                };
            });

            authRouter.get( '/logout', (req, res) => {
                logout(res)
                .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse) );
            });


            /**
             * GET Route to check User token (for Angular AuthGuard)
             * @param passport: AuthStrategy => use the access token to check user User
             * @callback => send user _id and date informations
            */
            authRouter.get( '/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
                // Check if User is validated for security strategy
                if(req.user.isValidated) return sendApiSuccessResponse(res, Vocabulary.request.success, { _id: req.user._id, lastConnection: req.user.lastConnection })
                else return sendApiErrorResponse(res, Vocabulary.request.error, 'User not validated');
            });

            /**
             * GET Route to check User token (for Angular AuthGuard)
             * @param passport: AuthStrategy => use the access token to check user User
             * @param body: Object => password: String, newPassword: String
             * @callback => send user _id and date informations
            */
            authRouter.post( '/password', this.passport.authenticate('jwt', { session: false }), (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatory.changePassword, req.body );

                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else{
                    //=> Request is valid: use controller
                    setPassword(req.body, req.user, res)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse) );
                };
            });

            authRouter.get('/:id', (req, res) => {
                // Error : no param present
                if (!req.params || !req.params.id) { sendBodyError(res, Vocabulary.errors.noParam) }

                readOneItem(req.params.id)
                .then( apiRes => sendApiSuccessResponse(res, 'User received', apiRes))
                .catch( apiErr => sendApiErrorResponse(res, 'Error during get the item', apiErr));
                
            });
        };

        // Start router
        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return authRouter;
        };
    };
//

/*
Export
*/
    module.exports = AuthRouterClass;
//