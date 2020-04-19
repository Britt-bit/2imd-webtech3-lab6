const newSchema = require('../models/App');

const getAll = (req, res, next) => {
    newSchema.find({}, (err, docs) => {
        if(!err){
            res.json({
                "status": "succes",
                "country": docs
            });
        }if(err){
            res.json({
                "status": "error",
                "message": "could not save this item"
            })
        }
    });
}

const update = (req, res) => {
    let country = req.params.country;
    let amount = req.body.amount;
    console.log(country);
    console.log(amount);

    if(updateItem === "Belgium"){
        newSchema.findOneAndUpdate({}, {"Belgium": amount}, (err, docs) => {
            if(!err){
                res.json({
                    "status": "succes", 
                    "countries": docs
                })
            }
        })
    } 
}
module.exports.getAll = getAll;
module.exports.update = update;