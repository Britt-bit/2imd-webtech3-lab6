const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coronaSchema = new Schema({
    Belgium: Number,
    Netherland: Number,
    France: Number
});
const newSchema = mongoose.model('newSchema', coronaSchema);
module.exports = newSchema;