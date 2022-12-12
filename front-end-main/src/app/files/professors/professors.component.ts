import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/services.service';
@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent {
  allprofessors : any = [] ;
constructor(private route : Router,private service : AuthadminService){
  this.getall();

 
}
getall(){
  this.service.getallprofessors().subscribe(((data)=>{
    this.allprofessors=data 
    //console.log(this.allstudents)this.allstudents
  }
  ))
}
FunctionDelete(id:any){
this.service.deleteprofessorbyid(id).subscribe((data)=>{
  this.getall();

})
}
FunctionEdite(id:any){
  this.route.navigate(["/admin/editprofessors/"+id])
  .then(() => {
    window.location.reload();
  });
}
}

