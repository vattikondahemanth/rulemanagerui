import { Component, OnInit } from '@angular/core';
 import { DepartmentsService } from "../../../services/masters/departments.service";


@Component({
  selector: 'app-adminstration',
  templateUrl: './adminstration.component.html',
  styleUrls: ['./adminstration.component.scss']
})
export class AdminstrationComponent implements OnInit {
 list: any;
 elements: any = [];
 headElements = ['id', 'first', 'last', 'handle'];
  constructor(private services: DepartmentsService) { }

  ngOnInit() {
    debugger;
    //this.getCourses();
    //this.services.GetDepartmentdetails();
    for (let i = 1; i <= 15; i++) {
      this.elements.push({ id: i, first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
    }
  
  }

  // getCourses(): void {
  //    debugger;
  //   this.services.GetDepartmentdetails().subscribe((data:any) => {
  //     this.list = data ;
      
  //    } );
  //   console.log(this.list);
  // }

}
