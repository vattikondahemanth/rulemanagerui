import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class StudentinfoService {

  constructor(private http:HttpClient) { }

  getstudentinfo():any
  {
     return this.http.get<any>("http://localhost:3000/courses/studentinfo") ;
     
  }
}
