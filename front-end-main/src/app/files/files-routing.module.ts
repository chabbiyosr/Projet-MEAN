import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutstudentComponent } from './students/aboutstudent/aboutstudent.component';
import { AddstudentComponent } from './students/addstudent/addstudent.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditstudentComponent } from './students/editstudent/editstudent.component';
import { StudentsComponent } from './students/students.component';
import { ProfessorsComponent } from './professors/professors.component';
import { AddprofessorsComponent } from './professors/addprofessors/addprofessors.component';
import { EditprofessorsComponent } from './professors/editprofessors/editprofessors.component';
import { AboutprofessorsComponent } from './professors/aboutprofessors/aboutprofessors.component';

const routes: Routes = [
    {path : "" , component : DashboardComponent , children : [
    {path : "" , component : AdminComponent},  
    {path : "student" , component : StudentsComponent},
    {path : "addstudent" , component :AddstudentComponent},
    {path : "editstudent" , component :EditstudentComponent},
    {path : "aboutstudent" , component :AboutstudentComponent},
    {path : "professors" , component : ProfessorsComponent},
    {path : "addprofessors" , component :AddprofessorsComponent},
    {path : "editprofessors" , component :EditprofessorsComponent},
    {path : "aboutprofessors" , component :AboutprofessorsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
