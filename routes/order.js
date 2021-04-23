const controller = require("../controllers/order")
const router = require("express").Router()
const authentication = require("../middlewares/authentication")

router.get("/",authentication, controller.orderForm)
router.post("/", controller.orderFormPost)

module.exports = router