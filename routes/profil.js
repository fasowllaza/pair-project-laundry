const controller = require("../controllers/profil")
const router = require("express").Router()
const authentication = require("../middlewares/authentication") 


router.get("/", authentication, controller.showProfil)

router.get("/edit",authentication, controller.editProfile)
router.post("/edit", controller.editProfilePost)

router.get("/delete/:id", authentication, controller.deleteAccount)

router.get("/deleteTransaction/:id", controller.deleteTransaction)


module.exports = router