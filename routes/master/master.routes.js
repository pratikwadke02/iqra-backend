module.exports = (app) => {
    const level = require('../../controllers/master/level.cont');
    const medium = require('../../controllers/master/medium.cont');
    const subject = require('../../controllers/master/subject.cont');
    const category = require('../../controllers/master/category.cont');
    const course = require('../../controllers/master/course.cont');
    const question = require('../../controllers/question/newquestion.cont');
    //middleware
    const uploadImage = require('../../middleware/upload.image');

    const router = require('express').Router();

    router.post("/add-levels", level.addLevel);
    router.get("/levels", level.findAllLevel);

    router.post("/add-mediums", medium.addMedium);
    router.get("/mediums", medium.findAllMedium);
    
    router.post("/add-subjects", subject.addSubject);
    router.get("/subjects", subject.findAllSubject);
    
    router.post("/add-categorys", category.addCategory);
    router.get("/categorys", category.getAllCategory);

    router.post("/add-courses", course.addCourse);
    router.get("/courses", course.getAllCourse);

    //<input type="file" name="questiontag"/>
    router.post("/add-questions", uploadImage.single("questiontag"), question.addQuestion);
    router.get("/questions", question.getAllQuestion);
    
    
    app.use("/api/master", router);

};