const db = require('../../models');
const Medium = db.medium;

exports.addMedium = async (req, res) => {
    try{
        var mediumCode;
        const mediums = await Medium.findAll();
        if(mediums.length == 0){
            mediumCode = "S100500";
        }else{
            var lastMedium = mediums[mediums.length - 1];
            var lastDigits = lastMedium.mediumCode.substring(1, 7);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            mediumCode = "S" + incrementedDigits;
        }
        await Medium.create({
            mediumCode: mediumCode,
            medium: req.body.medium,
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Medium."
            });
        });
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAllMedium = async (req, res) => {
    try{
        const mediums = await Medium.findAll();
        res.status(200).send(mediums);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}