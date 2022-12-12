import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';
import { AuthadminService } from 'src/app/services.service';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  resultData : any ;
  constructor(private route : Router,private service :AuthadminService){

  }
  onSubmit(data : any){
  console.log(data.value)
  this.service.add_student(data.value).subscribe((result)=> {
    this.resultData = result ; 
    if (this.resultData.Succ){
      this.route.navigate(["/admin/student"])
    }
  })
  }
}
