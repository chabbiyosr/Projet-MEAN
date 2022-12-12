const express = require("express");
const cors = require("cors");
let Student = require('./app/models/student');
let professor = require('./app/models/professor');
const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = require("./app/models");
const Role = db.role;
const dbConfig = require("./app/config/db.config");


db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    //initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });




// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);



//student
app.post('/add_student', (req , res , next)=>{
  let new_student = new Student({
    Name : req.body.Name ,
    Departement : req.body.Departement ,
    Mobile : req.body.Mobile,
    email : req.body.email,
    AdmissionDate : req.body.AdmissionDate ,
   
    })
    new_student.save().then((user)=>{
      res.json({"Succ":"Student Succ Added"})
    })
})

app.get('/all_students', async (req , res) =>{
  //console.log("test ")
  try {
    await Student.find({}) 
    .then(result=>{
      res.send(result)
    }) 
  }catch(e){
    console .log(e)
  }
})
app.get('/getstudentBy/:id', async (req , res) =>{
 
  let myid = req.params.id ;
  Student.findOne({"_id" : myid}).then(async function(Foundstudent) {
    if(Foundstudent!= null){
        res.json(Foundstudent)
    }else{
      res.json({"error": "Student does not exist"})
    }
               
})
})

app.delete('/delete_student/:id', async (req , res) =>{
  let myid = req.params.id ;
  Student.findOne({"_id" : myid}).then(async function(Foundstudent) {
    if(Foundstudent!= null){
      await Student.deleteOne({_id: myid}) 
      .then(result=>{
        res.json({"Msg":"Student Deleted Successfully"});
      }).catch((err)=>{
        res.json(err) ;

    })
    }else{
      res.json({"error": "Student does not exist"})

    }
  })
})

app.put('/edit_student/:id', (req , res , next)=>{
   let myid = req.params.id ;

   Student.findOne({"_id" : myid}).then(async function(Foundstudent) {
    if(Foundstudent!= null){
        const da = await Student.findOneAndUpdate({_id :Foundstudent._id}, 
            req.body,{new:true}) 
          .then(result=>{
            res.json({"Msg":"Student Updated Successfully"});
        }).catch((err)=>{
            res.json({"error":err}) ;

        }) 
    }
               
})
})

//professor
app.post('/add_professor', (req , res , next)=>{
  let new_professor = new professor({
    Name : req.body.Name ,
    Departement : req.body.Departement ,
    Gender : req.body.Gender ,
    Mobile : req.body.Mobile,
    Email : req.body.Email,
    JoiningDate : req.body.JoiningDate ,
   
    })
    new_professor.save().then((user)=>{
      res.json({"Succ":"professor Succ Added"})
    })
})

app.get('/all_professor', async (req , res) =>{
  //console.log("test ")
  try {
    await professor.find({}) 
    .then(result=>{
      res.send(result)
    }) 
  }catch(e){
    console .log(e)
  }
})

app.get('/getprofessorBy/:id', async (req , res) =>{
 
  let myid = req.params.id ;
  professor.findOne({"_id" : myid}).then(async function(Foundprofessor) {
    if(Foundprofessor!= null){
        res.json(Foundprofessor)
    }else{
      res.json({"error": "professor does not exist"})
    }
               
})
})

app.delete('/delete_professor/:id', async (req , res) =>{
  let myid = req.params.id ;
  professor.findOne({"_id" : myid}).then(async function(Foundprofessor) {
    if(Foundprofessor!= null){
      await professor.deleteOne({_id: myid}) 
      .then(result=>{
        res.json({"Msg":"professor Deleted Successfully"});
      }).catch((err)=>{
        res.json(err) ;

    })
    }else{
      res.json({"error": "professor does not exist"})

    }
  })
})

app.put('/edit_professor/:id', (req , res , next)=>{
  let myid = req.params.id ;

  professor.findOne({"_id" : myid}).then(async function(Foundprofessor) {
   if(Foundprofessor!= null){
       const da = await professor.findOneAndUpdate({_id :Foundprofessor._id}, 
           req.body,{new:true}) 
         .then(result=>{
           res.json({"Msg":"professor Updated Successfully"});
       }).catch((err)=>{
           res.json({"error":err}) ;

       }) 
   }
              
})
})

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});