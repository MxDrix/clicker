/*
Imports
*/
    // NodeJS
    const { Router } = require('express');
    const passport = require('passport');

    // Authentication
    const { setAuthentication } = require('../services/auth.service');
    setAuthentication(passport);

    // Routers
    const AuthRouterClass = require('./auth/auth.routes');
    const ClickerRouterClass = require('./clicker/clicker.routes');
//

/*
Define routers
*/
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();
    mainRouter.use('/api', apiRouter);


    // Child
    const authRouter = new AuthRouterClass({ passport });
    const clickerRouter = new ClickerRouterClass({ passport });
    
    
//

/*
Configure routes
*/
    // Set API routers
    apiRouter.use('/auth', authRouter.init());
    apiRouter.use('/clicker', clickerRouter.init());

//

/*
Export
*/
    module.exports = { mainRouter };
//