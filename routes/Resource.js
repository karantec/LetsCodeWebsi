const express=require('express');
const router=express.Router();


//import controller
const {createResource}=require('../controllers/createresource');
const {getResource}=require('../controllers/getResource');
// const {deleteCompany}=require('../controllers/deletecompany');
// const {getCompanyById}=require('../controllers/getCompanyById');
// const {updateCompany}=require('../controllers/UpdateCompany');


// const {deleteTodo}=require('../controllers/deleteTodo');
//define api routes
router.post('/createResource',createResource);
router.get('/getResource',getResource);
// router.get('/getCompanyById/:id',getCompanyById);
// router.put('/updateCompany/:id',updateCompany);
// router.delete('/deleteCompany/:id',deleteCompany);
module.exports=router;