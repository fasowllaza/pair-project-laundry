const express = require('express');
const { register } = require('../controllers/register');
const controller = require("../controllers/register")
const registerRoutes = express.Router()

registerRoutes.get('/', controller.getRegister);
registerRoutes.post('/', controller.postRegister);

module.exports = registerRoutes
