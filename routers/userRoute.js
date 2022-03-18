
const express = require('express');

const authController = require ('../controllers/authController');
const autMiddle = require ('../privateMiddlewares/autMid');

//const { getAdrenalinPage } = require('../controllers/pageControllers');

const router = express.Router();


router.route('/giris').post(authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/profil').get(autMiddle, authController.getProfilPage);
/* router.route('/').get(categoryController.getCategory);
router.route('/:slug').get(categoryController.getCategory); */

module.exports = router;
