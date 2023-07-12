const mongoose=require("mongoose")
const schema=mongoose.Schema

let usersSchema=new schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
    
})

module.exports= mongoose.model("formdetails",usersSchema)