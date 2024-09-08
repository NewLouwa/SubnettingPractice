// server/routes.js
const express = require('express');
const router = express.Router();
const authController = require('./authController');
const userController = require('./userController');

// Auth Routes
router.post('/api/signup', authController.signup);
router.post('/api/login', authController.login);
router.post('/api/logout', authController.logoutUser);
router.get('/api/check-auth', authController.checkAuth);

// User Routes
router.get('/api/user/email-from-uuid/:uuid', userController.getEmailFromUUID);
router.get('/api/user/profile/:uid', userController.getUserProfile);

module.exports = router;
