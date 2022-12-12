import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';
import { AuthadminService } from 'src/app/services.service';

@Component({
  selector: 'app-addprofessors',
  templateUrl: './addprofessors.component.html',
  styleUrls: ['./addprofessors.component.css']
})
export class AddprofessorsComponent {
  resultData : any ;
  constructor(private route : Router,private service :AuthadminService){

  }
  onSubmit(data : any){
  console.log(data.value)
  this.service.add_professors(data.value).subscribe((result)=> {
    this.resultData = result ; 
    if (this.resultData.Succ){
      this.route.navigate(["/admin/professors"])
    }
  })
  }
}
