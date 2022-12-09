import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutstudentComponent } from './files/students/aboutstudent/aboutstudent.component';
import {AddstudentComponent} from './files/students/addstudent/addstudent.component';
import {EditstudentComponent} from './files/students/editstudent/editstudent.component';
import {AboutprofessorsComponent} from './files/professors/aboutprofessors/aboutprofessors.component';
import {AddprofessorsComponent } from  './files/professors/addprofessors/addprofessors.component';
import { EditprofessorsComponent } from './files/professors/editprofessors/editprofessors.component';


const routes: Routes = [
  { path: 'admin', loadChildren:()=>import('./files/files.module').then(m=>m.FilesModule) },  //lazy routing
  {path: 'login'  , component :LoginComponent},
/* {path: 'aboutstudent'  , component :AboutstudentComponent},
  {path: 'addstudent'  , component :AddstudentComponent},
  {path: 'editstudent'  , component :EditstudentComponent},
  {path: 'aboutprofessor'  , component :AboutprofessorsComponent},
  {path: 'addprofessor'  , component :AddprofessorsComponent},
  {path: 'editprofessor'  , component :EditprofessorsComponent},  */
  { path: '**', component:NotfoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
