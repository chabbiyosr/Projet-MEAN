const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Student = new Schema({
    student_Roll_No: {
        type: int
      },
      student_name: {
        type: String
      },
      student_departement: {
        type: String
      },
      student_mobile: {
        type: int
      },
      student_email: {
        type: String
      },
      student_admission_date: {
        type: Date
      },
    }, {
        collection: 'students'
      })
      module.exports = mongoose.model('Student', Student)
