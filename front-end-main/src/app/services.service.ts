import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class  AuthadminService  {

  helper=new JwtHelperService()
  role=''

  constructor(private http:HttpClient) {

  }

  login(data:any){

    return this.http.post('http://localhost:3000/admin/login',data)
  } 

  getstudentbyid(id:any){
      return this.http.get('http://localhost:3000/getstudentBy/'+id)
  }
  getallstudents(){
    return this.http.get('http://localhost:3000/all_students')
  }
  editstudentsbyid(id:any,data:any){
    return this.http.put('http://localhost:3000/edit_student/'+id,data)
  }
  add_student(data:any){
    return this.http.post('http://localhost:3000/add_student/',data)
  }
  deletebyid(id:any){
    return this.http.delete('http://localhost:3000/delete_student/'+id)
  }
  

  getprofessorsbyid(id:any){
    return this.http.get('http://localhost:3000/getprofessorBy/'+id)
}
getallprofessors(){
  return this.http.get('http://localhost:3000/all_professor')
}
editprofessorbyid(id:any,data:any){
  return this.http.put('http://localhost:3000/edit_professor/'+id,data)
}
deleteprofessorbyid(id:any){
  return this.http.delete('http://localhost:3000/delete_professor/'+id)
}
add_professors(data:any){
  return this.http.post('http://localhost:3000/add_professor',data)
}
//  login(data:any){

//    return this.http.post('http://localhost:3000/admin/login',data)
//  } 


 saveDataProfil(token:any){
   
 //  let decodeToken= this.helper.decodeToken(token)
   
  localStorage.setItem('token',token)

 }
 getUsername(){
  let token:any=localStorage.getItem('token')
  let decodeToken= this.helper.decodeToken(token)

   return decodeToken.username

 }

// saveDataProfil(token:any){
    
  //  let decodeToken= this.helper.decodeToken(token)
    
  // localStorage.setItem('token',token)




 LoggedIn(){
    let token:any=localStorage.getItem('token')
    if(!token){
     return false
    }
    let decodeToken=this.helper.decodeToken(token)
   
   
    if(decodeToken.role!=='Admin'){
      return false
    }

    if(this.helper.isTokenExpired(token)){
      return false
    }

    return true
 }
}
