var mongoose = require('mongoose');
var Food = mongoose.model('FoodItems');//FoodItems is the name we gave to schema in db.js


var sendJsonResponse = function(res,status,content){

    res.status(status);
    res.json(content);
};

module.exports.foodItemsCreate = function(req,res){

sendJsonResponse(res,200,{'status':'success'});

};



module.exports.foodItemsListByPrice = function(req,res){

    sendJsonResponse(res,200,{'status':'success'});
    
    };



module.exports.foodItemsReadOne = function(req,res){

sendJsonResponse(res,200,{'status':'success'});

};



module.exports.foodItemsUpdateOne = function(req,res){

    sendJsonResponse(res,200,{'status':'success'});
    
    };


    
module.exports.foodItemsDeleteOne = function(req,res){

sendJsonResponse(res,200,{'status':'success'});

};
    
    