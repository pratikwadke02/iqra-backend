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
    router.delete("/delete-levels/:id", level.deleteLevel);
    router.put("/update-levels/:id", level.updateLevel);

    router.post("/add-mediums", medium.addMedium);
    router.get("/mediums", medium.findAllMedium);
    router.delete("/delete-mediums/:id", medium.deleteMedium);
    router.put("/update-mediums/:id", medium.updateMedium);

    router.post("/add-subjects", subject.addSubject);
    router.get("/subjects", subject.findAllSubject);
    router.delete("/delete-subjects/:id", subject.deleteSubject);
    router.put("/update-subjects/:id", subject.updateSubject);

    router.post("/add-courses", course.addCourse);
    router.get("/courses", course.getAllCourse);
    router.delete("/delete-courses/:id", course.deleteCourse);
    router.put("/update-courses/:id", course.updateCourse);

    //<input type="file" name="categoryimage"/>
    router.post("/add-categorys", uploadImage.single("categoryimage"), category.addCategory);
    router.get("/categorys", category.getAllCategory);

    //<input type="file" name="questiontag"/>
    router.post("/add-questions", uploadImage.single("questiontag"), question.addQuestion);
    router.get("/questions", question.getAllQuestion);

    app.use("/api/master", router);

};