const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const session = require('express-session')

const homepageRoutes = require("./routes/homepage")
const loginRoutes = require("./routes/login")
const registerRoutes = require("./routes/register")
const orderRoutes = require("./routes/order")
const membershipRoutes = require("./routes/membership")
const profilRoutes = require("./routes/profil")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:'test',
    resave:false,
    saveUninitialized:true
}))

app.use("/homepage", homepageRoutes)
app.use("/login", loginRoutes)
app.use("/register", registerRoutes)
app.use("/order", orderRoutes)
app.use("/membership", membershipRoutes)
app.use("/profile", profilRoutes)

app.get("/logout", function (req, res){ 
    req.session.destroy()
    res.redirect("/login")
})
app.use("/", (req, res)=>{res.redirect("/homepage")})




app.listen(port,()=>{
    console.log(`Berada di port ${port}`);
})