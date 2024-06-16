const Nail=require("../Models/HaircutServiceModel");

//Data Display
const getAllNails=async(req,res,next)=>{
    let nails;
    //Get all services
    try{
        nails=await Nail.find();

    }catch(err){
        console.log(err);
    }
    //not found
    if(!nails){
        return res.status(404).json({message:"service not found"});
    }
    //Display all services
    return res.status(200).json({nails});

};

//Data Insert
const addNails=async(req,res,next)=>{
    const {servicename,serviceprice,hours,minutes,category}=req.body;
    let nails;

    try {
        nails=new Nail({servicename,serviceprice,hours,minutes,category});
        await nails.save();
    }
    catch(err){
        console.log(err);
    }
  // not insert services
  if (!nails){
    return res.status(404).json({message:"unable to add nails service"});
  }
  return res.status(200).json({nails});
    }


 //Get by Id
   const getById=async(req,res,next)=>{
    const id=req.params.id;
    let nails;

    try{
        nails=await Nail.findById(id);
    }
    catch(err){
        console.log(err);
    }

     // not available service
  if (!nails){
    return res.status(404).json({message:"Service Not found"});
  }
  return res.status(200).json({nails});
    };

     //Update User Details
 const updateNail=async(req,res,next)=>{
    const id =req.params.id;
    const {servicename,serviceprice,hours,minutes,category}=req.body;

    let nails;

    try{
        nails=await Nail.findByIdAndUpdate(id,
            {servicename:servicename,serviceprice:serviceprice,hours:hours,minutes:minutes,category:category});  
            nails=await nails.save();
        }catch(err){
            console.log(err);
        }
        if (!nails){
            return res.status(404).json({message:"Unable to Update"});
          }
          return res.status(200).json({nails});
            };

    //Delete User
    const deleteNail = async(req,res,next)=>{
        const id=req.params.id;

        let nails;
        try{
            nails=await Nail.findByIdAndDelete(id)

            }
            catch (err){
                console.log(err);
            }

            if (!nails){
                return res.status(404).json({message:"Unable to Delete facial service"});
              }
              return res.status(200).json({nails});
                };


    

   

exports.getAllNails = getAllNails;
exports.addNails = addNails;
exports.getById = getById;
exports.updateNail=updateNail;
exports.deleteNail=deleteNail;