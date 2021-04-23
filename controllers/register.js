const { Customer, Bundle } = require('../models/')
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

class Controller {
    static getRegister (req, res) {
        res.render('register')
    }

    static postRegister (req, res) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.password, salt)
        let input = {
            name: (req.body.firstName + ' ' + req.body.lastName),
            userName: req.body.userName,
            address: req.body.address,
            email: req.body.email,
            noMobilePhone: req.body.noMobilePhone,
            password: hash,
        }
          let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'elonlaundry@gmail.com',
                pass: 'elonmusk'
            }
        });
        let mailOptions = {
            from: 'elonlaundry@gmail.com',
            to: input.email, 
            subject: 'Elon Laundry',
            text: 'Terima Kasih telah menjadi member Elon Laundry. Anda mendapatkan 5 DodgeCoin!'
        };
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log('Error occurs', err);
            } else {
                console.log('Email sent!!!');
            }
        });
        Customer.create(input)
        .then(() => {
            res.redirect('/login');
        })
        .catch((err) => {
            res.send(err);
        })
    }
}

module.exports = Controller;