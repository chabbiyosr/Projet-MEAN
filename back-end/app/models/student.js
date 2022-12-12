const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Student= new Schema({
  
  Name: {
      type: String
   },
   Departement: {
      type: String
   },
   
   Mobile : {
    type: Number
   },
   email: {
      type: String
   },
   AdmissionDate: {
      type: String
   },
  
}, {
   collection: 'Student'
})
module.exports = mongoose.model('Student', Student)