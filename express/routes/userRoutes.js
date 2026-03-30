const express = require('express');
const router = express.Router();

const { getUser, createUser } = require('../controllers/userController');

// GET
router.get('/user', getUser);

// POST
router.post('/user', createUser);

module.exports = router;