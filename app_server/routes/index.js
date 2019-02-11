var express = require('express');
var router = express.Router();
var ctrlFood = require('../controller/food');
var ctrlAbout = require('../controller/about');
var ctrlContact = require('../controller/contact');
/* GET home page. */
router.get('/', ctrlFood.foodHome);
router.get('/breakfast',ctrlFood.breakfast);
router.get('/lunch',ctrlFood.lunch);
router.get('/dinner',ctrlFood.dinner);
router.get('/snacks',ctrlFood.snacks);
router.get('/contact',ctrlContact.contact);
router.get('/about',ctrlAbout.about);



module.exports = router;
