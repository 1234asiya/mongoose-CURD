const express = require("express")
const Router = express.Router()
const User = require("../models/user")

Router.get("/", (req, res) => {
    res.render("index")
})
Router.post("/add", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log(name, email);
    const user = new User({ name: name, email: email })
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
        res.render("edit", { edituserdata: docs })}).catch((err) => { console.log(err) })


})
Router.post("/edit/:id", (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then((docs) => {
        res.redirect("/show")
    }).catch((err) => {
        console.log("error")
    })
})

module.exports = Router

