const express=require('express');
const router=express.Router();


//import controller
const {createJob}=require('../controllers/createcompany');
const {getCompany}=require('../controllers/getCompany');
const {deleteCompany}=require('../controllers/deletecompany');
const {getCompanyById}=require('../controllers/getCompanyById');
const {updateCompany}=require('../controllers/UpdateCompany');


// const {deleteTodo}=require('../controllers/deleteTodo');
//define api routes
router.post('/createJob',createJob);
router.get('/getCompany',getCompany);
router.get('/getCompanyById/:id',getCompanyById);
router.put('/updateCompany/:id',updateCompany);
router.delete('/deleteCompany/:id',deleteCompany);
module.exports=router;