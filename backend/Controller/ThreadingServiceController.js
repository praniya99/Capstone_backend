const Threading=require("../Models/ThreadingServiceModel");

//Data Display
const getAllThreadings=async(req,res,next)=>{
    let threadings;
    //Get all services
    try{
        threadings=await Threading.find();

    }catch(err){
        console.log(err);
    }
    //not found
    if(!threadings){
        return res.status(404).json({message:"service not found"});
    }
    //Display all services
    return res.status(200).json({threadings});

};

//Data Insert
const addThreadings=async(req,res,next)=>{
    const {servicename,serviceprice,category,timeduration}=req.body;
    let threadings;

    try {
        threadings=new BThreading({servicename,serviceprice,category,timeduration});
        await threadings.save();
    }
    catch(err){
        console.log(err);
    }
  // not insert services
  if (!threadings){
    return res.status(404).json({message:"unable to add threading service"});
  }
  return res.status(200).json({threadings});
    }


 //Get by Id
   const getById=async(req,res,next)=>{
    const id=req.params.id;
    let threadings;

    try{
        threadings=await Threading.findById(id);
    }
    catch(err){
        console.log(err);
    }

     // not available service
  if (!threadings){
    return res.status(404).json({message:"Service Not found"});
  }
  return res.status(200).json({threadings});
    };

     //Update User Details
 const updateThreading=async(req,res,next)=>{
    const id =req.params.id;
    const {servicename,serviceprice,category,timeduration}=req.body;

    let threadings;

    try{
        threadings=await Threading.findByIdAndUpdate(id,
            {servicename:servicename,serviceprice:serviceprice,category:category,timeduration:timeduration});  
            threadings=await threadings.save();
        }catch(err){
            console.log(err);
        }
        if (!threadings){
            return res.status(404).json({message:"Unable to Update"});
          }
          return res.status(200).json({threadings});
            };

    //Delete User
    const deleteThreading = async(req,res,next)=>{
        const id=req.params.id;

        let threadings;
        try{
            threadings=await Threading.findByIdAndDelete(id)

            }
            catch (err){
                console.log(err);
            }

            if (!threadings){
                return res.status(404).json({message:"Unable to Delete threading service"});
              }
              return res.status(200).json({threadings});
                };


    

   

exports.getAllThreadings = getAllThreadings;
exports.addThreadings = addThreadings;
exports.getById = getById;
exports.updateThreading=updateThreading;
exports.deleteThreading=deleteThreading;