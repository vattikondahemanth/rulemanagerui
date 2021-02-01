import { Component, OnInit } from '@angular/core';
 import { DepartmentsService } from "../../../../../services/masters/departments.service";
 import { PagerService } from '../../../../../services/pager-service.service'
 import { Departments } from '../../../../../model/departments.model';
import { anyChanged } from '@progress/kendo-angular-common';
import { Router } from '@angular/router'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  deleteflag :any;
  toggleflag: any;
  list: any;
  constructor(private router: Router,private services: DepartmentsService ,private pagerService: PagerService,private fb: FormBuilder) { }
  departmentform = this.fb.group({})
 allItems: any;
 pager: any = {};
 pagedItems: any[];
 allemployee:any[];
  ngOnInit() {
    //this.GetDepartmentdetail(1);
    this.GetAllEmployeeDataItems(1,10000);
    
  }

setPage(page: number) {
  if(this.allItems)
  {
  this.pager = this.pagerService.getPager(this.allItems['Total'], page);
  this.pagedItems = this.allItems['Data'] ;
  }
}
mysetPage(page: number):void{
  this.pagedItems =null;
  this.GetDepartmentdetail(page);
}

GetAllEmployeeDataItems(page: number ,pagesize:number):any{
  debugger;
  // this.services.GetAllEmployeeDataItems(page,pagesize).subscribe(
  //   response => {
  //     if (!response) {
        
  //       console.log(Error)
  //     } else {
  //       this.allemployee  = response['Data']
  //       console.log(this.allemployee)
  //     }
  //   });
  this.allemployee= [
    {
      departmentid: 1,
      Name : 'Hemanth',
      SendAnniversaryMail: 'true',
      ManagerName:'abc',
      Status: 'Active',
      IsActive: 'Y'
    },
    {
      departmentid: 1,
      Name: 'Abinav',
      SendAnniversaryMail: 'true',
      ManagerName:'xyz',
      Status: 'Active',
      IsActive: 'Y'
    }];
}
GetDepartmentdetail(page :number):any{
  this.services.GetDepartmentdetail(page).subscribe(
    response => {
      if (!response) {
        console.log(Error)
      } else {
        this.allItems  = response
        console.log(this.allItems)
        this.setPage(page);
      }
    });
}
ToggleIsActive(departmentid: number) {
  if(confirm("Are you sure you want to update the status of this record?")) {
    console.log("Implement ToggleIsActive functionality here");
  this.services.ToggleIsActive(departmentid).subscribe(
    response => {
      if (!response) {
        console.log(Error)
      } else {
        this.toggleflag  = response
        console.log(this.toggleflag.Result);
        this.GetDepartmentdetail(1);
        alert("Status has been updated for this record!!");
      
      }
    });
  }
}
RemoveDepartment(departmentid: number) {
  if(confirm("Are you sure you want to delete this record?")) {
  this.services.RemoveDepartment(departmentid).subscribe(
    response => {
      if (!response) {
        console.log(Error)
      } else {
        this.deleteflag  = response
        console.log(this.deleteflag.Result);
        this.GetDepartmentdetail(1);
        alert("Deleted Successfully!!");
      }
    });
  }
}
EditDepartment(departmentid: number) {
  this.router.navigate(['/atlasmenu/departmentsaddedit'], { queryParams: { DeptId: departmentid } });
}

}
