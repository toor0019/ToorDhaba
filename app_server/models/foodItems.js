var mongoose = require('mongoose');7

var foodItemSchema = new mongoose.Schema({

    name:{type:String, required:true},
    price:{type:Number,required:true,min:1.5},
    foodType:{type:String,required:true},
    description:{type:String,required:true}


});

mongoose.model('FoodItems',foodItemSchema);