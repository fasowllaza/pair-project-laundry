const {Transaction, Bundle, Customer} = require("../models")
const joinName = require("../helpers/joinName")
class Controller{
    static orderForm(req, res){
        res.render("customOrder")
    }
    static orderFormPost(req, res){
        let BundleId, CustomerId
        let quantity = req.body.celana + +req.body.baju + +req.body.pakaian_dalam
        
        let hargaPerHari = [20000, 15000, 10000, 5000]
        let totalCelana = req.body.celana * 10000
        let totalBaju = req.body.baju * 10000
        let totalPakaianDalam = req.body.pakaian_dalam * 10000
        let totalHari = hargaPerHari[req.body.hari]
        let harga = totalCelana+totalBaju+totalPakaianDalam+totalHari
        
        Bundle.create({
            price: harga,
            is_parfum: req.body.is_parfum,
            is_setrika: req.body.is_setrika,
            name:joinName(req.body.first_name, req.body.last_name)
        })
        .then((data)=>{
            BundleId = data.id
            return Customer.findAll({
                where:{
                    userName:req.session.username
                }
            })
            })
        .then((data)=>{
            CustomerId = data[0].id
            console.log(CustomerId);
            Transaction.create({
                CustomerId, BundleId, quantity
            })
        })
        .then(()=>{
            res.redirect("/homepage")
            
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    
}

module.exports = Controller