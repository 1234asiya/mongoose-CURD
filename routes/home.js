const express = require("express")
const Router = express.Router()
const User = require("../models/user")
let formidable = require("formidable")
var fs = require('fs');
var path = require('path');
Router.get("/", (req, res) => {
    res.render("index")
})

Router.post("/add", (req, res) => {
    const form = new formidable.IncomingForm()
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const idno = req.body.idno
    const image = req.body.image
    // form.parse(req, (err, fields, file) => {
    //     if (err) {
    //         return res.status(400).json({ error: err })
    //     }
    //     firstname = fields.firstname.toString();
    //     lastname = fields.lastname.toString()
    //     email = fields.email.toString();
    //     idno = fields.idno.toString();
    //     var data = fs.readFileSync(file.image[0].filepath);
    //     contentType = file.image[0].mimetype;
    const user = new User({ firstname, lastname, email, idno, image });
    form.parse(req,function(err,fields,files){
        let oldPath=files.image[0].filepath
        console.log(oldPath,47)
        let newPath = path.join(__dirname, '/uploads/'
          + files.image[0].originalFilename)
            console.log(newPath,50)

        let rawData=fs.readFileSync(oldPath)
        fs.writeFile(newPath,rawData,function(err){
            if(err){
                console.log(err)
            }
            // return res.send("Successfully uploaded")
            res.redirect("/")
        })
    })

    user.save().then(() => {
        console.log('Data saved to mongodb successfully');
        res.redirect("/")
    }).catch((err) => {
        console.log(err);
        console.log("error happened")
    })
    // })


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

