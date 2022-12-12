import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/services.service';

@Component({
  selector: 'app-editprofessors',
  templateUrl: './editprofessors.component.html',
  styleUrls: ['./editprofessors.component.css']
})
export class EditprofessorsComponent {
  idprof :any ;
  proffresult : any ;
  resultData : any ;
 
constructor(private router : ActivatedRoute , private sub : AuthadminService , private route : Router){
  this.router.params.subscribe(params => {
   // console.log(params["id"]);
    this.idprof = params["id"]

    this.sub.getprofessorsbyid(this.idprof).subscribe((result)=>{
      this.proffresult = result ;
      console.log(this.proffresult);
     
    })
    
 });
}

onSubmit(data : any){
  console.log(data.value)
  this.sub.editprofessorbyid(this.idprof,data.value).subscribe((result)=> {
    this.resultData = result ; 
    if (this.resultData.Msg){
      this.route.navigate(["/admin/professors"])
    }
  })
  }
}
