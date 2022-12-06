const db = require("../../models");
const Category = db.category;

exports.addCategory = async (req, res) => {
  try {
    //console.log(req.file);

    if (!req.file) {
      return res.send(`You must select a Image.`);
    }

    const categories = await Category.create({
      category: req.body.category,
      categoryimage: req.file.filename
    });
    res.status(200).send(`Category has been uploaded. ${categories.id}`);
    
  } catch (error) {
    //console.log(error);
    return res.status(500).send(`Error when trying upload category: ${error}`);
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