const db = require("../../models");
const Category = db.category;

exports.addCategory = async (req, res) => {
  try {
    const categories = await Category.create({
      category: req.body.category
    });
    res.status(200).send(`Category has been uploaded. ${categories.id}`);
    
  } catch (error) {
    //console.log(error);
    return res.status(500).send(`Error when trying upload Category: ${error}`);
  }
};

exports.getAllCategory = async (req, res) => {
    try{
        const categories = await Category.findAll();
        res.status(200).send(categories);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}