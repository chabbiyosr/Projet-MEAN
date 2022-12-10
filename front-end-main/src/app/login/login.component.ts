import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ServiceAuthService } from '../service-auth.service';
import { AuthadminService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

 
  dataReceived:any ;
  url:any = "admin" ;
  messageAuthError:any ;
  dataa : any ;
  constructor(private route:Router ,private Auth :ServiceAuthService) {
   /*  if(this.asd.LoggedIn()==true){
        this.route.navigate(['/admin'])
    } */
    
   }

  ngOnInit(): void {
    //this.url=this.arouter.snapshot.queryParams['returnUrl'] || '/admin/'
    //console.log(this.url)
  }

  login(data:any){
    //console.log(data.value);
    
    /* this.Auth.login(data.value).subscribe((result)=>{
      //  console.log(result);
    }) */
   // return this.http.post('http://localhost:3000/admin/login',data)
  

  // loginadmin(f:any){
  //   let data=f.value
    
     this.Auth.login(data.value).subscribe((response)=>
       {
         this.dataReceived=response
         this.route.navigate([this.url])
          .then(() => {
            window.location.reload();
          });
       },err=>this.messageAuthError="invalid email and password")
}

  // }
}






