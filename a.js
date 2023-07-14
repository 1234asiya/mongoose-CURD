
  // const form = new formidable.IncomingForm()

    // form.parse(req, (err, fields, file) => {
    //     if (err) {
    //         return res.status(400).json({ error: err })
    //     }

    //     firstname = fields.firstname;
    //     firstname = firstname.toString();
    //     lastname = fields.lastname;
    //     lastname = lastname.toString();
    //     email = fields.email;
    //     email = email.toString();
    //     idno = fields.idno
    //     idno = idno.toString();
    //     // showimage=showimage.toString()
    //     // showimage=fields.showimage
    //     showimage=""
    //     const user = new User({ firstname, lastname, email, idno, image,showimage})
    //     user.save().then(() => {
    //         res.redirect("/")
    //     })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //     var image = path.join(__dirname, "public", "uploads", file.image[0].originalFilename);
    //     form.on("fileBegin", (name, file) => {
    //         file.filepath = __dirname + "/uploads" + file.originalFilename
    //         console.log(filepath,44)

    //     })





Router.post("/add", (req, res) => {

    // for image
    const form = new formidable.IncomingForm();

    /*
    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({ error: err })
        }

        firstName = fields.firstName;
        firstName = firstName.toString();
        lastName = fields.lastName;
        lastName = lastName.toString();
        email = fields.email;
        email = email.toString();
        mob_no = fields.mob_no;
        mob_no = mob_no.toString();
        var oldPath = file.photo[0].filepath;
        // var filepath = path.join(__dirname, "public", "uploads", file.originalFilename);
        // var filePath = path.join("E:\CRUD-MONGO-11-07-2023", "public", "uploads", file.photo[0].originalFilename);
        var photo = path.join("E:\CRUD-MONGO-11-07-2023", "public", "uploads", file.photo[0].originalFilename);

        // fs.rename(oldPath, filepath, function (err) {
        //     if (err) throw err;
        //     console.log("fs.rename");
        //   });
        form.on("fileBegin", (name, file) => {
            file.filepath = __dirname+"/uploads"+ file.originalFilename

        })
        const user = new User({ firstName, lastName, email, mob_no, photo });
        user.save().then(() => {
            console.log('Data saved to mongodb successfully');
            res.redirect("/")
        }).catch((err) => {
            console.log(err);
            console.log("error happened")
        })



    })

    */


    // file.filepath = path.join("E:\CRUD-MONGO-11-07-2023", "public", "uploads", file.originalFilename);
    // form.on("fileBegin", (name, file) => {
    //     file.filepath = path.join(__dirname, "public", "uploads", file.originalFilename);
    //     console.log(file.filepath);
    //     console.log("uploaded");
    // })
    // form.on("file", () => {
    //     console.log("file has been uploaded");
    // })


    form.parse(req);
    console.log(req);
    form.on("fileBegin", (name, file) => {
        file.filepath = __dirname + "/uploads/" + file.originalFilename;
    })
})