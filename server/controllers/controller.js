var controller = function(Model){
    
    var get = function(req, res){
        var model = Model;
        model.find(function(err, model){
           if(err)
                res.send(500).send(err);
           else
                res.json(model);
        });
    }
    
    var post = function(req, res){
        var model = new Model(req.body);
        
        model.save();
        res.status(201);
        res.send(model);
    }
    
    return{
        get:get,
        post:post
    }
}

module.exports = controller;