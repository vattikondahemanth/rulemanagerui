import { Component } from '@angular/core';
 
 import {FormControl, FormGroup} from '@angular/forms';
 import { CourseService  } from "../../services/course.service";
 import { StudentinfoService } from "../../services/studentinfo.service";

@Component({
  templateUrl: 'net.component.html'
})
export class NetComponent {
courselist : any =['.net', 'java','python' ,'angular'];   
studentinfo :any;   
courses:any;
rdangular:string;
rdnet:string  ;
  constructor( private courseService: CourseService , private studentservice: StudentinfoService) { }
  payal = new FormGroup({
    hemanth: new FormControl('lamb'),
  });
   
   getdata()
   {
      
     console.log(this.payal.value['hemanth']);
     this.getCourses();
    this.getstudentinfo();
   }

   getCourses(): void {
    this.courseService.getcourses().subscribe((data:any) => {
        this.courses = data ;
      
     } );
    console.log(this.courses);
   }
  getstudentinfo():void{
    this.studentservice.getstudentinfo().subscribe((std:any) => this.studentinfo=std) ;
    console.log(this.studentinfo);
  }

}
