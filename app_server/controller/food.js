module.exports.foodHome = function(req,res){

    res.render('foodHome',{title:'Home'});
} 


module.exports.breakfast = function(req,res){

    res.render('breakfast',{title:'Breakfast',description:'Please Order from our selection of Eggs Benedict, Omelletes, Classic Eggs, Waffles or Pancakes'});
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