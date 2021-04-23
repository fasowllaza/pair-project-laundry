const {Customer} = require("../models")
const { compare, hash } = require("bcryptjs")

class Controller{
    static login (req,res){
        res.render("login")
    }
    static loginPost(req, res){
        const userData = {
            userName : req.body.username,
            password : req.body.password
        }
        Customer.findOne({
            where: {
                userName: userData.userName}
        })
        .then((data)=>{
            if(compare(userData.password, data.password)){
                req.session.customer = true
                req.session.username = data.userName
                res.redirect("/profile")
            }
            else{
                res.redirect("/login")
            }
        })
        .catch((err)=>{
            console.log(err);
            res.send(err)
        })

    }
}

module.exports = Controller