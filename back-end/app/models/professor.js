const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let professor= new Schema({
  
  Name: {
      type: String
   },
   Departement: {
      type: String
   },
   
   Gender : {
    type: String
   },
   Mobile: {
      type: Number
   },
   Email: {
      type: String
   },
  
   JoiningDate: {
    type: String
 },
}, {
   collection: 'professor'
})
module.exports = mongoose.model('professor', professor)