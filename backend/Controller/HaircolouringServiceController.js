const Haircolouring=require("../Models/HaircolouringServiceModel");

//Data Display
const getAllHaircolourings=async(req,res,next)=>{
    let haircolourings;
    //Get all services
    try{
        haircolourings=await Haircolouring.find();

    }catch(err){
        console.log(err);
    }
    //not found
    if(!haircolourings){
        return res.status(404).json({message:"service not found"});
    }
    //Display all services
    return res.status(200).json({haircolourings});

};

//Data Insert
const addHaircolourings=async(req,res,next)=>{
    const {servicename,serviceprice,hours,minutes,category}=req.body;
    let haircolourings;

    try {
        haircolourings=new Haircolouring({servicename,serviceprice,hours,minutes,category});
        await haircolourings.save();
    }
    catch(err){
        console.log(err);
    }
  // not insert services
  if (!haircolourings){
    return res.status(404).json({message:"unable to add haircolourings service"});
  }
  return res.status(200).json({haircolourings});
    }


 //Get by Id
   const getById=async(req,res,next)=>{
    const id=req.params.id;
    let haircolourings;

    try{
        haircolourings=await Haircut.findById(id);
    }
    catch(err){
        console.log(err);
    }

     // not available service
  if (!haircolourings){
    return res.status(404).json({message:"Service Not found"});
  }
  return res.status(200).json({haircolourings});
    };

     //Update User Details
 const updateHaircolouring=async(req,res,next)=>{
    const id =req.params.id;
    const {servicename,serviceprice,hours,minutes,category}=req.body;

    let haircolourings;

    try{
        haircolourings=await Haircolouring.findByIdAndUpdate(id,
            {servicename:servicename,serviceprice:serviceprice,hours:hours,minutes:minutes,category:category});  
            haircolourings=await haircolourings.save();
        }catch(err){
            console.log(err);
        }
        if (!haircolourings){
            return res.status(404).json({message:"Unable to Update"});
          }
          return res.status(200).json({haircolourings});
            };

    //Delete User
    const deleteHaircolouring = async(req,res,next)=>{
        const id=req.params.id;

        let haircolourings;
        try{
            haircolourings=await Haircolouring.findByIdAndDelete(id)

            }
            catch (err){
                console.log(err);
            }

            if (!haircolourings){
                return res.status(404).json({message:"Unable to Delete haircolourings service"});
              }
              return res.status(200).json({haircolourings});
                };


    

   

exports.getAllHaircolourings = getAllHaircolourings;
exports.addHaircolourings = addHaircolourings;
exports.getById = getById;
exports.updateHaircolouring=updateHaircolouring;
exports.deleteHaircolouring=deleteHaircolouring;