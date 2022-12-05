module.exports = (app) => {
    const level = require('../../controllers/master/level.cont');
    const medium = require('../../controllers/master/medium.cont');
    const subject = require('../../controllers/master/subject.cont');
    const category = require('../../controllers/master/category.cont');
    const uploadImage = require('../../middleware/upload.image');

    const router = require('express').Router();

    router.post("/add-levels", level.addLevel);
    router.get("/levels", level.findAllLevel);

    router.post("/add-mediums", medium.addMedium);
    router.get("/mediums", medium.findAllMedium);
    
    router.post("/add-subjects", subject.addSubject);
    router.get("/subjects", subject.findAllSubject);
    
    //<input type="file" name="image"/>
    router.post("/uploadimages", uploadImage.single("image"), category.uploadCategory);
    router.get("/getimages", category.getCategory);
    
    
    app.use("/api/master", router);

};