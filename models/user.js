const mongoose=require("mongoose")
const schema=mongoose.Schema
let usersSchema=new schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        // required: true
    },
    email:{
        type:String,
        // required: true
    },
    idno:{
        type:String,
        // required: true
    },
    image:{
        // data: Buffer,
        // contentType: String

       type:String,
        // required: true

    },
    // showimage:{
        
    //     data: Buffer,
    //     contentType: String
    // }
})
module.exports= mongoose.model("formdetails",usersSchema)