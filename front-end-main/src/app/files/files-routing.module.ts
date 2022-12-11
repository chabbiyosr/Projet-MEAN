import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddstudentComponent } from './students/addstudent/addstudent.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditstudentComponent } from './students/editstudent/editstudent.component';
import { StudentsComponent } from './students/students.component';
import { ProfessorsComponent } from './professors/professors.component';
import { AddprofessorsComponent } from './professors/addprofessors/addprofessors.component';
import { EditprofessorsComponent } from './professors/editprofessors/editprofessors.component';


const routes: Routes = [
    {path : "" , component : DashboardComponent , children : [
    {path : "" , component : AdminComponent},  
    {path : "student" , component : StudentsComponent},
    {path : "addstudent" , component :AddstudentComponent},
    {path : "editstudent" , component :EditstudentComponent},
    {path : "professors" , component : ProfessorsComponent},
    {path : "addprofessors" , component :AddprofessorsComponent},
    {path : "editprofessors" , component :EditprofessorsComponent},
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
