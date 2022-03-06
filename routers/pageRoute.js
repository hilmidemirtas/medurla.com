
const express = require('express');

const pageController = require ('../controllers/pageController');
//const { getAdrenalinPage } = require('../controllers/pageControllers');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/adrenalin').get(pageController.getAdrenalinPage);
router.route('/ilaclar').get(pageController.getAddPage);
router.route('/algoritmalar').get(pageController.getAddPage);
router.route('/cihazlar').get(pageController.getAddPage);
router.route('/add').get(pageController.getAddPage);

module.exports = router;
