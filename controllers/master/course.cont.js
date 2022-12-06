const db = require("../../models");
const Course = db.course;

exports.addCourse = async (req, res) => {
  try {
    const courses = await Course.create({
      course: req.body.course,
      categoryname: req.body.categoryname
    });
    res.status(200).send(`Course has been uploaded. ${courses.id}`);
    
  } catch (error) {
    //console.log(error);
    return res.status(500).send(`Error when trying upload Course: ${error}`);
  }
};

exports.getAllCourse = async (req, res) => {
    try{
        const courses = await Course.findAll();
        res.status(200).send(courses);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}