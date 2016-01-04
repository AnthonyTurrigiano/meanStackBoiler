var model = function(mongoose){
    
    var Schema = mongoose.Schema;
    
    var modelSchema = new Schema({
       "username" : {type: String},
       "password" : {type: String}
    });
    
    var Model = mongoose.model( "Model", modelSchema );
    
    return Model;
}

module.exports = model;