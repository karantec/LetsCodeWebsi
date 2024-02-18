const express=require('express');
const app=express();


//load config file from env
require('dotenv').config();
const PORT=process.env.PORT||4000


//middelware to parse json
app.use(express.json());

 //import routes  from todo api

const CompanyRoutes=require("./routes/Company");

app.use('/api/v1', CompanyRoutes);

//default route
app.get('/',(req,res)=>{
    res.send("Hello World");
});
/// start server
//CONNECT TO DB 
const connectDb=require('./config/database');
connectDb();

app.listen(PORT,()=>{
    console.log(`App is running on port  ${PORT}`);
});
