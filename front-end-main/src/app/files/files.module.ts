import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { AddstudentComponent } from './students/addstudent/addstudent.component';
import { EditstudentComponent } from './students/editstudent/editstudent.component';
import { AboutstudentComponent } from './students/aboutstudent/aboutstudent.component';
import { ProfessorsComponent } from './professors/professors.component';
import { AddprofessorsComponent } from './professors/addprofessors/addprofessors.component';
import { EditprofessorsComponent } from './professors/editprofessors/editprofessors.component';
import { AboutprofessorsComponent } from './professors/aboutprofessors/aboutprofessors.component'; 


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    StudentsComponent,
    AddstudentComponent,
    EditstudentComponent,
    AboutstudentComponent,
    ProfessorsComponent,
    AddprofessorsComponent,
    EditprofessorsComponent,
    AboutprofessorsComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule
  ]
})
export class FilesModule { }