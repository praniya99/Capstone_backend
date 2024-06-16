const Makeup=require("../Models/HaircutServiceModel");

//Data Display
const getAllMakeups=async(req,res,next)=>{
    let makeups;
    //Get all services
    try{
        makeups=await Makeup.find();

    }catch(err){
        console.log(err);
    }
    //not found
    if(!makeups){
        return res.status(404).json({message:"service not found"});
    }
    //Display all services
    return res.status(200).json({makeups});

};

//Data Insert
const addMakeups=async(req,res,next)=>{
    const {servicename,serviceprice,hours,minutes,category}=req.body;
    let makeups;

    try {
        makeups=new Makeup({servicename,serviceprice,hours,minutes,category});
        await makeups.save();
    }
    catch(err){
        console.log(err);
    }
  // not insert services
  if (!makeups){
    return res.status(404).json({message:"unable to add haircuts service"});
  }
  return res.status(200).json({makeups});
    }


 //Get by Id
   const getById=async(req,res,next)=>{
    const id=req.params.id;
    let makeups;

    try{
        makeups=await Makeup.findById(id);
    }
    catch(err){
        console.log(err);
    }

     // not available service
  if (!makeups){
    return res.status(404).json({message:"Service Not found"});
  }
  return res.status(200).json({makeups});
    };

     //Update User Details
 const updateMakeup=async(req,res,next)=>{
    const id =req.params.id;
    const {servicename,serviceprice,hours,minutes,category}=req.body;

    let makeups;

    try{
        makeups=await Haircut.findByIdAndUpdate(id,
            {servicename:servicename,serviceprice:serviceprice,hours:hours,minutes:minutes,category:category});  
            makeups=await makeups.save();
        }catch(err){
            console.log(err);
        }
        if (!makeups){
            return res.status(404).json({message:"Unable to Update"});
          }
          return res.status(200).json({makeups});
            };

    //Delete User
    const deleteMakeup = async(req,res,next)=>{
        const id=req.params.id;

        let makeups;
        try{
            makeups=await Haircut.findByIdAndDelete(id)

            }
            catch (err){
                console.log(err);
            }

            if (!makeups){
                return res.status(404).json({message:"Unable to Delete makeups service"});
              }
              return res.status(200).json({makeups});
                };


    

   

exports.getAllMakeups = getAllMakeups;
exports.addMakeups = addMakeups;
exports.getById = getById;
exports.updateMakeup=updateMakeup;
exports.deleteMakeup=deleteMakeup;