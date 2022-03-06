
const express = require('express');

const addController = require ('../controllers/addController');
//const { getAdrenalinPage } = require('../controllers/pageControllers');

const router = express.Router();

router.route('/').get(addController.getAllYeniAddilaclar);
router.route('/').post(addController.createYeniAddilac);


module.exports = router;
