/*
Imports
*/
    // Node
    const express = require('express');
    const clickerRouter = express.Router();

    // Inner
    const Mandatory = require('../../services/mandatory.service');
    const Vocabulary = require('../../services/vocabulary.service');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { checkFields } = require('../../services/request.service');
    // const { createItem } = require('./clicker.controller');
    const { addOrRejectWithoutFinding, findAllWithSubDocument } = require('../main.controller');
//

/*
Routes definition
*/
    class ClickerRouterClass {

        // Inject Passport to secure routes
        constructor({ passport }) {
            this.passport = passport;
        }
        
        // Set route fonctions
        routes(){

            clickerRouter.post('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { return sendBodyError(res, Vocabulary.errors.noBody) }
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatory.newClicker, req.body ); // Edit the mandatory
                
                //=> Error: bad fields
                if (!ok) { return sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else{
                    req.body.player = req.user._id;
                    req.body.date = new Date();

                    addOrRejectWithoutFinding(req, 'clicker')
                    .then( apiRes =>  sendApiSuccessResponse(res, Vocabulary.request.success, apiRes))
                    .catch( apiErr => sendApiErrorResponse(res, Vocabulary.request.error, apiErr));
                };
            });
            
            clickerRouter.get('/', (req, res) => {
                findAllWithSubDocument('clicker', 'player')
                .then( apiRes =>  sendApiSuccessResponse(res, Vocabulary.request.success, apiRes))
                .catch( apiErr => sendApiErrorResponse(res, Vocabulary.request.error, apiErr));
            });

        };

        // Start router
        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return clickerRouter;
        };
    };
//

/*
Export
*/
    module.exports = ClickerRouterClass;
//