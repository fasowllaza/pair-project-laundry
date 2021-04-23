const controller = require("../controllers/membership")
const router = require("express").Router()
const authentication = require("../middlewares/authentication") 

router.get("/", authentication, controller.showMembership)
router.post("/:id", controller.showMembershipPost)


module.exports = router