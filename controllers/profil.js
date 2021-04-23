const {Customer, Bundle, Transaction} = require("../models")
const moneyFormatter = require("../helpers/moneyFormatter")

class Controller{
    static showProfil(req, res){
        let profile
        let pendingLaundry
        let completedLaundry
        let claimedLaundry
        Customer.findAll({
            where:{
                userName:req.session.username
            },include:[Bundle]
        })
        .then((data)=>{
            profile = data[0]
            res.render("profil",{profile, moneyFormatter})
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    static editProfile(req, res){
        Customer.findAll({
            where:{
                userName: req.session.username
            }
        })
        .then((data)=>{
            let profile = data[0]
            res.render("editProfile", {profile})
        })
    }
    static editProfilePost(req, res){
        Customer.update({
            name:req.body.name,
            userName:req.body.userName,
            address:req.body.address,
            email:req.body.email,
            noMobilePhone:req.body.noMobilePhone
        },{
            where:{
                userName:req.session.username
            }
        })
        .then(()=>{
            res.redirect("/profile")
        })
    }   
    static deleteAccount(req, res){
        Customer.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(()=>{
            res.redirect("/homepage")
        })
    }
    static deleteTransaction(req, res){
        console.log(req.params.id);
       Transaction.destroy({
           where:{
               BundleId:req.params.id
           }
       })
       .then(()=>{
           res.redirect("/profile")
       })
    }
}

module.exports = Controller