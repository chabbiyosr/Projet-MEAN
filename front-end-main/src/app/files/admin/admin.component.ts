import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/services.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username:any
  constructor(private asd:AuthadminService,private route:Router) {
  
      this.username=this.asd.getUsername()
     
   }

  ngOnInit(): void {
  }


  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }

}
