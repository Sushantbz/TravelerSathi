const express = require("express")
const router = express.Router()
const {
	loginController,
	registerController,
} = require("../../controllers/auth")

router.get("/login", (req, res) => {
	console.log(".login")
	res.status(200).json({ message: "Login route" })
})

router.post("/login", loginController)
router.post("/register", registerController)

module.exports = router
