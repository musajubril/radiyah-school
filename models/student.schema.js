const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    full_name: String,
    dob: Date,
    gender: String,
    class: String,
    mobile_number: String,
    age: String

})
const Student = mongoose.model('Student',StudentSchema)
module.exports = Student