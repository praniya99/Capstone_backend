const Bridal=require("../Models/BridalserviceModel");

//Data Display
const getAllBridals=async(req,res,next)=>{
    let bridals;
    //Get all services
    try{
        bridals=await Bridal.find();

    }catch(err){
        console.log(err);
    }
    //not found
    if(!bridals){
        return res.status(404).json({message:"service not found"});
    }
    //Display all services
    return res.status(200).json({bridals});

};

//Data Insert
const addBridals=async(req,res,next)=>{
    const {servicename,serviceprice,category,timeduration}=req.body;
    let bridals;

    try {
        bridals=new Bridal({servicename,serviceprice,category,timeduration});
        await bridals.save();
    }
    catch(err){
        console.log(err);
    }
  // not insert services
  if (!bridals){
    return res.status(404).json({message:"unable to add bridal service"});
  }
  return res.status(200).json({bridals});
    }


 //Get by Id
   const getById=async(req,res,next)=>{
    const id=req.params.id;
    let bridals;

    try{
        bridals=await Bridal.findById(id);
    }
    catch(err){
        console.log(err);
    }

     // not available service
  if (!bridals){
    return res.status(404).json({message:"Service Not found"});
  }
  return res.status(200).json({bridals});
    };

     //Update User Details
 const updateBridal=async(req,res,next)=>{
    const id =req.params.id;
    const {servicename,serviceprice,category,timeduration}=req.body;

    let bridals;

    try{
        bridals=await Bridal.findByIdAndUpdate(id,
            {servicename:servicename,serviceprice:serviceprice,category:category,timeduration:timeduration});  
            bridals=await bridals.save();
        }catch(err){
            console.log(err);
        }
        if (!bridals){
            return res.status(404).json({message:"Unable to Update"});
          }
          return res.status(200).json({bridals});
            };

    //Delete User
    const deleteBridal = async(req,res,next)=>{
        const id=req.params.id;

        let bridals;
        try{
            bridals=await Bridal.findByIdAndDelete(id)

            }
            catch (err){
                console.log(err);
            }

            if (!bridals){
                return res.status(404).json({message:"Unable to Delete bridal service"});
              }
              return res.status(200).json({bridals});
                };


    

   

exports.getAllBridals = getAllBridals;
exports.addBridals = addBridals;
exports.getById = getById;
exports.updateBridal=updateBridal;
exports.deleteBridal=deleteBridal;