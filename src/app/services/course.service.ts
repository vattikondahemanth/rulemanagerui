import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
 
  constructor( private http: HttpClient) { 
  }

  getcourses():any
  {
   return this.http.get<any>("http://localhost:3000/courses/content");
  
  }
}
