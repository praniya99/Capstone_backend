const Bridal=require("../Models/BridalserviceModel");

//Data Display
const fetchAllBridals = async () => {
    try {
        const bridals = await Bridal.find();
        if (!bridals || bridals.length === 0) {
            throw new Error('No bridal services found');
        }
        return bridals;
    } catch (error) {
        console.error('Error fetching bridal services:', error);
        throw new Error('Internal Server Error');
    }
};

// Original controller function
const getAllBridals = async (req, res, next) => {
    try {
        const bridals = await fetchAllBridals();
        return res.status(200).json(bridals);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Data Insert
const addBridals=async(req,res,next)=>{
    const {servicename,serviceprice,hours,minutes,category}=req.body;
    let bridals;

    try {
        bridals=new Bridal({servicename,serviceprice,hours,minutes,category});
        await bridals.save();
    }
    catch(err){
        console.log(err);
    }
  // not insert services
  if (!bridals){
    return res.status(404).json({message:"unable to add haircuts service"});
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
    const {servicename,serviceprice,hours,minutes,category}=req.body;

    let bridals;

    try{
        bridals=await Bridal.findByIdAndUpdate(id,
            {servicename:servicename,serviceprice:serviceprice,hours:hours,minutes:minutes,category:category});  
            haircuts=await bridals.save();
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
                return res.status(404).json({message:"Unable to Delete facial service"});
              }
              return res.status(200).json({bridals});
                };


 exports.fetchAllBridals = fetchAllBridals;
exports.addBridals = addBridals;
exports.getById = getById;
exports.updateBridal=updateBridal;
exports.deleteBridal=deleteBridal;