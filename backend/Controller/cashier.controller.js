const Cashier=require("../Models/cashier.model");
const dotenv = require('dotenv');

dotenv.config();
//Data Display
const getAllCashier=async(req,res,next)=>{
    let cashier;
    //Get all users
    try{
        cashier=await Cashier.find();

    }catch(err){
        console.log(err);
    }
    //not found
    if(!cashier){
        return res.status(404).json({message:"Cashier Assistant not found"});
    }
    //Display all users
    return res.status(200).json({cashier});

};

//Data Insert
const addCashier=async(req,res,next)=>{
    const {firstname,lastname,dateofbirth,gender,mobileno,email,address,educationQualifications,experience,additionalDetails}=req.body;
    let cashier;

    try {
        cashier=new Cashier({firstname,lastname,dateofbirth,gender,mobileno,email,address,educationQualifications,experience,additionalDetails});
        await cashier.save();
    }
    catch(err){
        console.log(err);
    }
  // not insert users
  if (!cashier){
    return res.status(404).json({message:"unable to add cashier"});
  }
  return res.status(200).json({cashier});
    }


 //Get by Id
   const getById=async(req,res,next)=>{
    const id=req.params.id;
    let cashier;

    try{
        cashier=await Cashier.findById(id);
    }
    catch(err){
        console.log(err);
    }

     // not available users
  if (!cashier){
    return res.status(404).json({message:"Cashier assistant Not found"});
  }
  return res.status(200).json({cashier});
    };

     //Update User Details
 const updateCashier=async(req,res,next)=>{
    const id =req.params.id;
    const {firstname,lastname,dateofbirth,gender,mobileno,email,address,educationQualifications,experience,additionalDetails}=req.body;

    let cashier;

    try{
        cashier=await Cashier.findByIdAndUpdate(id,
            {firstname:firstname,lastname:lastname,dateofbirth:dateofbirth,gender:gender,mobileno:mobileno,email:email,address:address,educationQualifications:educationQualifications,experience:experience,additionalDetails:additionalDetails});  
            cashier=await cashier.save();
        }catch(err){
            console.log(err);
        }
        if (!cashier){
            return res.status(404).json({message:"Unable to Update"});
          }
          return res.status(200).json({cashier});
            };

    //Delete User
    const deleteCashier = async(req,res,next)=>{
        const id=req.params.id;

        let cashier;
        try{
            cashier=await Cashier.findByIdAndDelete(id)

            }
            catch (err){
                console.log(err);
            }

            if (!cashier){
                return res.status(404).json({message:"Unable to Delete User Details"});
              }
              return res.status(200).json({cashier});
                };


    

   

exports.getAllCashier = getAllCashier;
exports.addCashier = addCashier;
exports.getById = getById;
exports.updateCashier=updateCashier;
exports.deleteCashier=deleteCashier;
