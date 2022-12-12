import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/services.service';
@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent {

  idprof :any ;
  studresult : any ;
  resultData : any ;
 
constructor(private router : ActivatedRoute , private sub : AuthadminService , private route : Router){
  this.router.params.subscribe(params => {
   // console.log(params["id"]);
    this.idprof = params["id"]

    this.sub.getstudentbyid(this.idprof).subscribe((result)=>{
      this.studresult = result ;
      console.log(this.studresult);
     
    })
    
 });
}

onSubmit(data : any){
  console.log(data.value)
  this.sub.editstudentsbyid(this.idprof,data.value).subscribe((result)=> {
    this.resultData = result ; 
    if (this.resultData.Msg){
      this.route.navigate(["/admin/student"])
    }
  })
  }
}
