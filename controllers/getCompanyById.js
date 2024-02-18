const Company = require("../models/Remote");

exports.getCompanyById=async(req,res)=>{
    try{    
        const id=req.params.id;
        const response=await Company.findById({_id:id});
        if(!response){
            return res.status(404).json({
                success:false,
                data:"No Company found",
                message:"No Todo found",
            })
        }
        //data for given id found
        res.status(200).json({
            success:true,
            data:response,
            message:"The id is feteched Successfully"
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
