const Company = require("../models/Remote");

exports.getCompany=async(req,res)=>{
    try{    
        const todos=await Company.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Company data Fetched Successfully"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            data:"Internal Server error",
            message:"Server Errror",
        });
       
    }
}
