
const {Bundle, Customer, Transaction} = require("../models")

class Controller{

    static showMembership(req, res){
        Bundle
        .findAll()
        .then((data)=>{
            res.render("membershipOrder", {data})
        })
    }
    static showMembershipPost(req, res){
        let CustomerId
        let BundleId = req.params.id
        Customer.findAll({
            where:{
                userName:req.session.username
            }
        })
        .then((data)=>{
            CustomerId = data[0].id
            return Transaction.create({
                BundleId:BundleId,
                CustomerId:CustomerId,
            })
        })
        .then(()=>{
            res.redirect("/profile")
        })
    }
}

module.exports = Controller