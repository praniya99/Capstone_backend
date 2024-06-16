const Facial=require("../Models/FacialServiceModel");

//Data Display
const getAllFacials=async(req,res,next)=>{
    let facials;
    //Get all services
    try{
        facials=await Facial.find();

    }catch(err){
        console.log(err);
    }
    //not found
    if(!facials){
        return res.status(404).json({message:"service not found"});
    }
    //Display all services
    return res.status(200).json({facials});

};

//Data Insert
const addFacials=async(req,res,next)=>{
    const {servicename,serviceprice,hours,minutes,category}=req.body;
    let facials;

    try {
        facials=new Facial({servicename,serviceprice,hours,minutes,category});
        await haircuts.save();
    }
    catch(err){
        console.log(err);
    }
  // not insert services
  if (!facials){
    return res.status(404).json({message:"unable to add facials service"});
  }
  return res.status(200).json({facials});
    }


 //Get by Id
   const getById=async(req,res,next)=>{
    const id=req.params.id;
    let facials;

    try{
        facials=await Facial.findById(id);
    }
    catch(err){
        console.log(err);
    }

     // not available service
  if (!facials){
    return res.status(404).json({message:"Service Not found"});
  }
  return res.status(200).json({facials});
    };

     //Update User Details
 const updateFacial=async(req,res,next)=>{
    const id =req.params.id;
    const {servicename,serviceprice,hours,minutes,category}=req.body;

    let facials;

    try{
        facials=await Facial.findByIdAndUpdate(id,
            {servicename:servicename,serviceprice:serviceprice,hours:hours,minutes:minutes,category:category});  
            facials=await facials.save();
        }catch(err){
            console.log(err);
        }
        if (!facials){
            return res.status(404).json({message:"Unable to Update"});
          }
          return res.status(200).json({facials});
            };

    //Delete User
    const deleteFacial = async(req,res,next)=>{
        const id=req.params.id;

        let facials;
        try{
            facials=await Facial.findByIdAndDelete(id)

            }
            catch (err){
                console.log(err);
            }

            if (!facials){
                return res.status(404).json({message:"Unable to Delete facial service"});
              }
              return res.status(200).json({facials});
                };


    

   

exports.getAllFacials = getAllFacials;
exports.addFacials = addFacials;
exports.getById = getById;
exports.updateFacial=updateFacial;
exports.deleteFacial=deleteFacial;