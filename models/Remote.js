const mongoose = require("mongoose");

const  ResourceSchema = new mongoose.Schema(
    {
      
        Title:{
            type:String,
            required:true,
        },
        Link: {
            type:String,
            required:true,
        },
        
       
        createdAt:{
            type:Date,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Resource", ResourceSchema);