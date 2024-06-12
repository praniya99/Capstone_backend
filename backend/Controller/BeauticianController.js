const Beautician=require("../Models/BeauticianModel");

//Data Display
const getAllBeauticians=async(req,res,next)=>{
    let beauticians;
    //Get all users
    try{
        beauticians=await Beautician.find();

    }catch(err){
        console.log(err);
    }
    //not found
    if(!beauticians){
        return res.status(404).json({message:"Beautician not found"});
    }
    //Display all users
    return res.status(200).json({beauticians});

};

//Data Insert
const addBeauticians=async(req,res,next)=>{
    const {firstname,lastname,dateofbirth,gender,mobileno,email,address}=req.body;
    let beauticians;

    try {
        beauticians=new Beautician({firstname,lastname,dateofbirth,gender,mobileno,email,address});
        await beauticians.save();
    }
    catch(err){
        console.log(err);
    }
  // not insert users
  if (!beauticians){
    return res.status(404).json({message:"unable to add beauticians"});
  }
  return res.status(200).json({beauticians});
    }


 //Get by Id
   const getById=async(req,res,next)=>{
    const id=req.params.id;
    let beauticians;

    try{
        beauticians=await Beautician.findById(id);
    }
    catch(err){
        console.log(err);
    }

     // not available users
  if (!beauticians){
    return res.status(404).json({message:"Beautician Not found"});
  }
  return res.status(200).json({beauticians});
    };

     //Update User Details
 const updateBeautician=async(req,res,next)=>{
    const id =req.params.id;
    const {firstname,lastname,dateofbirth,gender,mobileno,email,address}=req.body;

    let beauticians;

    try{
        beauticians=await Beautician.findByIdAndUpdate(id,
            {firstname:firstname,lastname:lastname,dateofbirth:dateofbirth,gender:gender,mobileno:mobileno,email:email,address:address});  
            beauticians=await beauticians.save();
        }catch(err){
            console.log(err);
        }
        if (!beauticians){
            return res.status(404).json({message:"Unable to Update"});
          }
          return res.status(200).json({beauticians});
            };

    //Delete User
    const deleteBeautician = async(req,res,next)=>{
        const id=req.params.id;

        let beauticians;
        try{
            beauticians=await Beautician.findByIdAndDelete(id)

            }
            catch (err){
                console.log(err);
            }

            if (!beauticians){
                return res.status(404).json({message:"Unable to Delete User Details"});
              }
              return res.status(200).json({beauticians});
                };


    

   

exports.getAllBeauticians = getAllBeauticians;
exports.addBeauticians = addBeauticians;
exports.getById = getById;
exports.updateBeautician=updateBeautician;
exports.deleteBeautician=deleteBeautician;