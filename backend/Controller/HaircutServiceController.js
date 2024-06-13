const Haircut=require("../Models/HaircutServiceModel");

//Data Display
const getAllFacials=async(req,res,next)=>{
    let haircuts;
    //Get all services
    try{
        haircuts=await Haircut.find();

    }catch(err){
        console.log(err);
    }
    //not found
    if(!haircuts){
        return res.status(404).json({message:"service not found"});
    }
    //Display all services
    return res.status(200).json({haircuts});

};

//Data Insert
const addHaircuts=async(req,res,next)=>{
    const {servicename,serviceprice,category,timeduration}=req.body;
    let haircuts;

    try {
        haircuts=new Bridal({servicename,serviceprice,category,timeduration});
        await haircuts.save();
    }
    catch(err){
        console.log(err);
    }
  // not insert services
  if (!haircuts){
    return res.status(404).json({message:"unable to add haircuts service"});
  }
  return res.status(200).json({haircuts});
    }


 //Get by Id
   const getById=async(req,res,next)=>{
    const id=req.params.id;
    let haircuts;

    try{
        haircuts=await Haircut.findById(id);
    }
    catch(err){
        console.log(err);
    }

     // not available service
  if (!haircuts){
    return res.status(404).json({message:"Service Not found"});
  }
  return res.status(200).json({haircuts});
    };

     //Update User Details
 const updateHaircut=async(req,res,next)=>{
    const id =req.params.id;
    const {servicename,serviceprice,category,timeduration}=req.body;

    let haircuts;

    try{
        haircuts=await Haircut.findByIdAndUpdate(id,
            {servicename:servicename,serviceprice:serviceprice,category:category,timeduration:timeduration});  
            haircuts=await haircuts.save();
        }catch(err){
            console.log(err);
        }
        if (!haircuts){
            return res.status(404).json({message:"Unable to Update"});
          }
          return res.status(200).json({haircuts});
            };

    //Delete User
    const deleteHaircut = async(req,res,next)=>{
        const id=req.params.id;

        let haircuts;
        try{
            haircuts=await Haircut.findByIdAndDelete(id)

            }
            catch (err){
                console.log(err);
            }

            if (!haircuts){
                return res.status(404).json({message:"Unable to Delete facial service"});
              }
              return res.status(200).json({haircuts});
                };


    

   

exports.getAllHaircuts = getAllhaircuts;
exports.addHaircuts = addHaircuts;
exports.getById = getById;
exports.updateHaircut=updateHaircut;
exports.deleteHaircut=deleteHaircut;