const controller = require("../controllers/homepage")

const express = require('express');
const registerRoutes = express.Router()


registerRoutes.get('/', controller.homepage)

module.exports = registerRoutes