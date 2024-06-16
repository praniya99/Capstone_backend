const Waxing=require("../Models/WaxingServiceModel");

//Data Display
const getAllWaxings=async(req,res,next)=>{
    let waxings;
    //Get all services
    try{
        waxings=await Waxing.find();

    }catch(err){
        console.log(err);
    }
    //not found
    if(!waxings){
        return res.status(404).json({message:"service not found"});
    }
    //Display all services
    return res.status(200).json({waxings});

};

//Data Insert
const addWaxings=async(req,res,next)=>{
    const {servicename,serviceprice,hours,minutes,category}=req.body;
    let waxings;

    try {
        waxings=new Waxing({servicename,serviceprice,hours,minutes,category});
        await waxings.save();
    }
    catch(err){
        console.log(err);
    }
  // not insert services
  if (!waxings){
    return res.status(404).json({message:"unable to add haircuts service"});
  }
  return res.status(200).json({waxings});
    }


 //Get by Id
   const getById=async(req,res,next)=>{
    const id=req.params.id;
    let waxings;

    try{
        waxings=await Waxing.findById(id);
    }
    catch(err){
        console.log(err);
    }

     // not available service
  if (!waxings){
    return res.status(404).json({message:"Service Not found"});
  }
  return res.status(200).json({waxings});
    };

     //Update User Details
 const updateWaxing=async(req,res,next)=>{
    const id =req.params.id;
    const {servicename,serviceprice,hours,minutes,category}=req.body;

    let waxings;

    try{
        waxings=await Haircut.findByIdAndUpdate(id,
            {servicename:servicename,serviceprice:serviceprice,hours:hours,minutes:minutes,category:category});  
            haircuts=await haircuts.save();
        }catch(err){
            console.log(err);
        }
        if (!haircuts){
            return res.status(404).json({message:"Unable to Update"});
          }
          return res.status(200).json({waxings});
            };

    //Delete User
    const deleteWaxing = async(req,res,next)=>{
        const id=req.params.id;

        let waxings;
        try{
            waxings=await Waxing.findByIdAndDelete(id)

            }
            catch (err){
                console.log(err);
            }

            if (!waxings){
                return res.status(404).json({message:"Unable to Delete facial service"});
              }
              return res.status(200).json({waxings});
                };


    

   

exports.getAllWaxings = getAllWaxings;
exports.addWaxings = addWaxings;
exports.getById = getById;
exports.updateWaxing=updateWaxing;
exports.deleteWaxing=deleteWaxing;