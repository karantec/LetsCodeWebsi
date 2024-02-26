const mongoose=require('mongoose');


require('dotenv').config();
const connectDb=()=>{
    mongoose.connect(process.env.DATABASE_URL)
            .then(()=>{
                console.log('Database connected successfully');
            })
            .catch((err)=>{
                console.log('Unable to connect with database',err);
                process.exit(1);
            })
    
}
module.exports=connectDb;