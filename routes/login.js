const controller = require("../controllers/login")
const router = require("express").Router()

router.get("/", controller.login)
router.post("/", controller.loginPost)

module.exports = router