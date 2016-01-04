var routes = function(controller, express, app, cors){
    
    var router = express.Router();

    router.route("/")
    .get(controller.get)
    .post(controller.post);

    app.use("/api", router);
    
    return router;
}

module.exports = routes;