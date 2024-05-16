
const Resource=require('../models/Remote');
//define route handler


 exports.createResource=async(req,res)=>{
    try{
        //extract title and description from req.body
        const {Title,Link}=req.body;
        const existingResources = await Resource.findOne({
            Title: Title,
            Link: Link,
           
        });

        if (existingResources) {
            return res.status(409).json({
                success: false,
                data: "Resources Already Exists",
                message: "Resources with the same details already exists"
            });
        }

        if (!Title || !Link) {
            return res.status(400).json({
                success: false,
                data: "Bad Request",
                message: "All fields are required"
            });
        }
        
        //create a new Company
        const response=await Resource.create({
            Title,Link
        
        });
        //send newly created todo back as response
        res.status(200).json({
            success:true,
            data:response,
            message:"Resource CreatedSuccessfully"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:true,
            data:"Internal Server error",
            message:"Internal Server error",
        });
    }
}
