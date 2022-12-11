import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class dataService {
    constructor (private http:HttpClient) {}

    getAllstudents(){
       return this.http.get("http://localhost:4200/students")

    }


// addstudent(firstname:String,lastname:String,email:String,age:number)
//     return this.http.post('')
// 

} 
