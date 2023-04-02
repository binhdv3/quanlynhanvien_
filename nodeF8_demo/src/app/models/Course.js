const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator'); //thư viện slug của mongoose 
mongoose.plugin(slug);

const Course = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    salary : {type: String},
    slug: { type: String , slug: 'name'}, // , unique: true  biến name thàng không dấu và đưa vào dạng slug, unique: chỉ tồn tại duy nhất 1 cái
}, {
    timestamps: true,
});
module.exports = mongoose.model('Course', Course);
