module.exports = (app) => {
    const level = require('../../controllers/master/level.cont');
    const medium = require('../../controllers/master/medium.cont');
    const subject = require('../../controllers/master/subject.cont');
    const category = require('../../controllers/master/category.cont');
    const question = require('../../controllers/question/question.cont');
    //middleware
    const uploadImage = require('../../middleware/upload.image');

    const router = require('express').Router();

    router.post("/add-levels", level.addLevel);
    router.get("/levels", level.findAllLevel);

    router.post("/add-mediums", medium.addMedium);
    router.get("/mediums", medium.findAllMedium);
    
    router.post("/add-subjects", subject.addSubject);
    router.get("/subjects", subject.findAllSubject);
    
    //<input type="file" name="categoryimage"/>
    router.post("/add-categorys", uploadImage.single("categoryimage"), category.addCategory);
    router.get("/categorys", category.getAllCategory);

    //<input type="file" name="questiontag"/>
    router.post("/add-questions", uploadImage.single("questiontag"), question.addQuestion);
    router.get("/questions", question.getAllQuestion);
    
    
    app.use("/api/master", router);

};