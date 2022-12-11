const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Student= new Schema({
   Username: {
      type: String
   },
   RollNo : {
    type: Number
   },
   email: {
      type: String
   },
   MobilelNo : {
    type: Number
   },
  
}, {
   collection: 'Student'
})
module.exports = mongoose.model('Student', Student)