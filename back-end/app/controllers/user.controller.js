const User = require("../models/user.model");
exports.allAccess = (req, res) => {
     res.status(200).send("Public Content.");
    };
  
  /*  exports.userBoard = (req, res) => {
     res.status(200).send("User Content.");
   };
  
   exports.studentBoard = (req, res) => {
     res.status(200).send("Student Content.");
   }; */

//   exports.adminBoard = (req, res) => {
//     res.status(200).send("Admin Content.");
//   };
  
//   exports.professorBoard = (req, res) => {
//     res.status(200).send("Professor Content.");
//   };
  //supprimer user
  //supprimer user

//   exports.delete("/supprimer/:id",async(req,res)=>{
//   try{
//       await User.findOneAndDelete({id:req.params.id})
//       res.send("supprimé avec succès")
     
//   }
//   catch(err){
//       console.log(err);
//   }

// });

//MAJ

// exports.post("/ajouter_user", async(req,res)=>{
//   try{
//     let new_user=new User({
//       firstname:req.body.firstname,
//       lastname:req.body.lastname,
//       email:req.body.email,
//       password:req.body.password,
//       role:req.body.role,
//   });

//       await new_user.save();
//       res.send("Save avec succès");  
//   }
//   catch(err){
//       console.log(err);
//   }

// });

//ajouter utilisateur
exports.post=  async(req,res)=>{
  try{
      let new_user=new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role,
      });
      await new_user.save();
      res.send("save avec succès");
  }
  catch(err){
      console.log(err);
  }

}; 

exports.update = async(req,res)=>{
  try{
      await User.findOneAndUpdate(
          {_id:req.params.id},
          {email:req.body.email},
          );
      res.send("Mise à jour avec succès")
     
      
  }
  catch(err){
      console.log(err);
  }

};



exports.delete = async(req, res) => {
  const id = req.params.id;

  User.findOneAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe user was not found!`
        });
      } else {
        res.send({
          message: "user was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user with id=" + id
      });
    });
};


