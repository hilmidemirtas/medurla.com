
const express = require('express');

const ekleController = require ('../controllers/ekleController');
const roleMid = require('../privateMiddlewares/roleMiddleware');
//const { getAdrenalinPage } = require('../controllers/pageControllers');

const router = express.Router();


router.route('/').post( roleMid(['yazar','admin']),ekleController.createYeniAddilac);
router.route('/').get(ekleController.getAllYeniAddilaclar);
router.route('/:slug').get(ekleController.getIlac);

module.exports = router;
