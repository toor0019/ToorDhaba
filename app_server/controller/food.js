module.exports.foodHome = function(req,res){

    res.render('index',{title:'Homepage'});
} 


module.exports.breakfast = function(req,res){

    res.render('index',{title:'Breakfast'});
}

module.exports.lunch = function(req,res){

    res.render('index',{title:'Lunch'});
}

module.exports.dinner = function(req,res){

    res.render('index',{title:'Dinner'});
}

module.exports.snacks = function(req,res){

    res.render('index',{title:'Snacks'});
}