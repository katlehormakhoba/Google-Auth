const router = require('express').Router();
const authController = require('../controllers/authController');





router.get('/google/signin', authController.googleSignIn)


router.get('/auth/google', )


module.exports = router