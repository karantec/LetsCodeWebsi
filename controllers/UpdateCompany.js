const Company=require('../models/Remote');

exports.updateCompany=async(req,res)=>{
    try{    
      const {id,Location}=req.params;
        const {CompanyName,JobType,Roles, Skills,Experience}=req.body;
        const response=await Company.findByIdAndUpdate({_id:id},
            {CompanyName,JobType, Location,Roles, Skills,Experience,updatedAt:Date.now()},);
       
        return res.status(200).json({
            success:true,
            data:response ,
            message:"The id is updated Successfully"
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
