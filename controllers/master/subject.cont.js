
const db = require('../../models');
const Subject = db.subject;

exports.addSubject = async (req, res) => {
    try{
        var subjectCode;
        const subjects = await Subject.findAll();
        if(subjects.length == 0){
            subjectCode = "S100500";
        }else{
            var lastSubject = subjects[subjects.length - 1];
            var lastDigits = lastSubject.subjectCode.substring(1, 7);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            subjectCode = "S" + incrementedDigits;
        }
        await Subject.create({
            subjectCode: subjectCode,
            subject: req.body.subject,
            coursename: req.body.coursename
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Subject."
            });
        });
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAllSubject = async (req, res) => {
    try{
        const subjects = await Subject.findAll();
        res.status(200).send(subjects);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}