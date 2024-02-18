const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
    {
        CompanyName:{
            type:String,
            required:true,
        },
        JobType: {
            type:String,
            required:true,
        },
        Location: {
            type:String,
            required:true,
        },
        Roles: {
            type:String,
            required:true,
        },
        Skills:{
            type:String, 
            required:true,
        },
        Experience:{
            type:String,
            required:true,
        },
        ApplyLink:{
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

module.exports = mongoose.model("Company", CompanySchema);