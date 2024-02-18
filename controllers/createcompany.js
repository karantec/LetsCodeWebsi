
const Company=require('../models/Remote');
//define route handler


 exports.createJob=async(req,res)=>{
    try{
        //extract title and description from req.body
        const {CompanyName,JobType, Location,Roles, Skills,Experience,ApplyLink}=req.body;
        const existingCompany = await Company.findOne({
            CompanyName: CompanyName,
            JobType: JobType,
            Location: Location,
            Roles: Roles,
            Skills: Skills,
            Experience: Experience,
            ApplyLink: ApplyLink
        });

        if (existingCompany) {
            return res.status(409).json({
                success: false,
                data: "Company Already Exists",
                message: "Company with the same details already exists"
            });
        }

        if (!CompanyName || !JobType || !Location || !Roles || !Skills || !Experience || !ApplyLink) {
            return res.status(400).json({
                success: false,
                data: "Bad Request",
                message: "All fields are required"
            });
        }
        
        //create a new Company
        const response=await Company.create({
            CompanyName,JobType, Location,Roles, Skills,Experience,ApplyLink
        
        });
        //send newly created todo back as response
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry CreatedSuccessfully"
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
