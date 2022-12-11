const express = require('express');
const app = express();
const studentRoute = express.Router();
// Student model
let Student = require('../model/Students');
// Add Student
studentRoute.route('/addstudent').post((req, res, next) => {
    Student.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });
  // Get all student
studentRoute.route('/').get((req, res) => {
    Student.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  // Get single student
studentRoute.route('/aboutstudent/:id').get((req, res) => {
    Student.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  // edit student
studentRoute.route('/editstudent/:id').put((req, res, next) => {
    Student.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Student successfully editeded!')
      }
    })
  })
  // Delete student
studentRoute.route('/deletestudent/:id').delete((req, res, next) => {
    Student.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  module.exports = studentRoute;

