const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

app.post('/ajouterUser',(req,res,next)=>{
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  

   })
  });

 app.get("/api/test/all", controller.allAccess);

/*   app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
         "/api/test/stud",
          [authJwt.verifyToken, authJwt.isStudent],
           controller.studentBoard
   ); */

  // app.get(
  //   "/api/test/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );

  // app.get(
  //   "/api/test/prof",
  //   [authJwt.verifyToken, authJwt.isProfessor],
  //   controller.professorBoard
  // );

  //supprimer user

  app.delete("/api/test/del/:id",controller.delete); 

  //MAJ

  app.put("/api/test/maj/:id",controller.update); 

  app.post("/ajouter_user",controller.post);
  
}