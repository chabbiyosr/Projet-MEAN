import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/services.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
allstudents : any = [] ;
constructor(private route : Router,private service : AuthadminService){
  this.getall();

 
}
getall(){
  this.service.getallstudents().subscribe(((data)=>{
    this.allstudents=data 
    //console.log(this.allstudents)this.allstudents
  }
  ))
}
FunctionDelete(id:any){
this.service.deletebyid(id).subscribe((data)=>{
  this.getall();

})
}
FunctionEdite(id:any){
  this.route.navigate(["/admin/editstudent/"+id])
  .then(() => {
    window.location.reload();
  });
}
}
