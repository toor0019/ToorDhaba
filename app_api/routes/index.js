var express = require('express');
var router = express.Router();
var ctrlFood = require('../controller/food');

//router.get('/fooditems',ctrlFood.foodItemsListByPrice);
router.post('/fooditems',ctrlFood.foodItemsCreate);
//router.get('/fooditems',ctrlFood.foodItemsReadOne);
//router.put('/fooditems',ctrlFood.foodItemsUpdateOne);
//router.delete('/fooditems',ctrlFood.foodItemsDeleteOne);

module.exports = router;