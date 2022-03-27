const router = require('express').Router();
const authController = require('../controllers/authController');





router.get('/google/signin', authController.googleSignIn)


router.get('/auth/google', authController.getGoogleUser)


module.exports = router