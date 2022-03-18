
const express = require('express');

const categoryController = require ('../controllers/categoryController');
//const { getAdrenalinPage } = require('../controllers/pageControllers');

const router = express.Router();


router.route('/').post(categoryController.createCategory);
/* router.route('/').get(categoryController.getCategory);
router.route('/:slug').get(categoryController.getCategory); */

module.exports = router;
