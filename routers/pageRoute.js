
const express = require('express');

const pageController = require ('../controllers/pageController');
const logMiddle = require ('../privateMiddlewares/logMid');
//const { getAdrenalinPage } = require('../controllers/pageControllers');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/kayit').get(logMiddle, pageController.getKayıtPage);
router.route('/login').get(logMiddle, pageController.getLoginPage);
/* router.route('/profil').get(pageController.getProfilPage); */
/* router.route('/ilaclar').get(pageController.getIlaclarPage);
 */



module.exports = router;
