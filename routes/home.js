const express = require("express")
const Router = express.Router()
const User = require("../models/user")
let formidable = require("formidable")
Router.get("/", (req, res) => {
    res.render("index")
})
Router.post("/add", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const idno = req.body.idno;
    const image = req.body.image;
    
    const user = new User({ firstname: firstname, lastname:lastname, email: email, idno:idno ,image:image})
    const form = new formidable.IncomingForm()

    console.log(user)
    user.save().then(() => {
        res.redirect("/")
    })
        .catch((err) => {
            console.log(err)
        })
})
Router.get("/show", (req, res) => {
    User.find({}).then((docs) => {
        res.render("show", {
            showuserdetails: docs
        })
    }).catch((err) => {
        console.log(err)
    })
})
Router.get("/edit/:id", (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then((docs) => {
        res.render("edit", { edituserdata: docs })
    }).catch((err) => { console.log(err) })
})
Router.post("/edit/:id", (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then((docs) => {
        res.redirect("/show")
    }).catch((err) => {
        console.log("error")
    })
})
Router.get("/delete/:id", (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }, req.body).then((docs) => {
        res.redirect("/show")
    }).catch((err) => {
        console.log("error")
    })
})

module.exports = Router

