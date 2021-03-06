import express from 'express';
import homepageController from '../controllers/homepageController'
let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homepageController.getHomePage)
    return app.use("/", router);
}
module.exports = initWebRouters;