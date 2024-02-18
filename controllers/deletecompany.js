const Company=require('../models/Remote');

exports.deleteCompany=async(req,res)=>{
    try{    
        const  id=req.params.id;
        const response=await Company.findByIdAndDelete({_id:id});
        if(!response){
            return res.status(404).json({
                success:false,
                data:"Not Found",
                message:"Todo not found"
            });
        }
        return res.status(200).json({
            success:true,
            data:response ,
            message:"The id is deleted Successfully"
        })
       
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            data:"Internal Server error",
            message:"Server Errror",
        });
       
    }
}
