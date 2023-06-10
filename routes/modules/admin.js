const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')

const adminController = require('../../controllers/admin-controller')

const { authenticatedAdmin } = require('../../middleware/auth')

router.get('/signin', adminController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), adminController.signIn)

router.get('/tweets', authenticatedAdmin, adminController.tweetsPage)
router.get('/users', authenticatedAdmin, adminController.usersPage)

module.exports = router
