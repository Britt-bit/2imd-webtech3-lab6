const newSchema = require('../models/App');

const getAll = (req, res, next) => {
    newSchema.find({}, (err, docs) => {
        if(!err){
            res.json({
                "status": "succes",
                "message": docs
            });
        }if(err){
            res.json({
                "status": "error",
                "message": "could not save this item"
            })
        }
    });
}
module.exports.getAll = getAll;