const Resource=require('../models/Remote');

exports.getResource=async(req,res)=>{
    try{    
        const Resources=await Resource.find({});
        res.status(200).json({
            success:true,
            data:Resources,
            message:"Resoures Company data Fetched Successfully"
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
