const CrudModel = require("../model/crudSchema");

const PostController = async (req, res) => {
  try {
    bodyData = req.body;
    const {title,description,category} = bodyData;
    if(!title ||!description  || !category ){
      res.json({
        status: false,
        message: "Required Fields Are Missing!",
        data: null,
      });
      return
    }
    //validation nhy lagana hay
    const crudOperation = new CrudModel(bodyData);
    const crudData = await crudOperation.save();
    res.status(200).json({status:200,crudData});
  } catch (error) {
    res.send(error)
  }
};
//AllPost
const AllPostController = async (req,res)=>{
  try{
    const allData =await CrudModel.find({});
    res.status(200).json({status:200,allData});
  }
  catch(error){
    res.status(400).json({status:200,error});

  }
}
//update user
const UpdateController = async(req,res)=>{
  try{
    const id = req.params.id;
    const updateuser = await CrudModel.findByIdAndUpdate({_id:id},req.body,{new:true})
    res.status(200).json({status:200,updateuser})
  }catch(error){
    res.send(error)
  }
}
//delet user 
const DeleteController = async(req,res)=>{
  try{
    const id = req.params.id;
    const delUser = await CrudModel.findByIdAndDelete({_id:id})
    res.status(200).json({status:200,delUser});
  }catch(error){
    res.send(error)
  }
}
module.exports = {
  PostController,
  AllPostController,
 UpdateController,
 DeleteController
};
