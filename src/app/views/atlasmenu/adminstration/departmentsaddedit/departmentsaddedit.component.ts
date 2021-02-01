import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DepartmentsService } from "../../../../services/masters/departments.service";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-departmentsaddedit',
  templateUrl: './departmentsaddedit.component.html',
  styleUrls: ['./departmentsaddedit.component.scss']
})
export class DepartmentsaddeditComponent implements OnInit {
  departmentid: number;
  btnname: string;
  isDisabled :boolean= false;
  constructor(private route: ActivatedRoute,private router:Router,private fb: FormBuilder,private services: DepartmentsService) {
    this.route.queryParams.subscribe(params => {
      this.departmentid = params['DeptId'];
      
  });
   }

  departmentform = this.fb.group({})
  // allemployee: any;
  allemployee: [
  {
    departmentid: 1,
    name: 'Hello World',
    SendAnniversaryMail: 'true',
    ManagerId:10,
    Status: 'Active',
    IsActive: 'Y'
  }];
  departmentdetail:any;
  departmentresult :boolean= false;
  ngOnInit() {
    this.departmentform.addControl("deptId", new FormControl('', [Validators.required]));
    this.departmentform.addControl("Name", new FormControl('', [Validators.required]));
    this.departmentform.addControl("SendAnniversaryMail", new FormControl('', [Validators.required]));
    this.departmentform.addControl("Id", new FormControl('', [Validators.required]));
    this.departmentform.addControl("Status", new FormControl('', [Validators.required]));
    this.departmentform.addControl("IsActive", new FormControl());
    if(this.departmentid == 0){
      this.btnname = "Add"
      this.isDisabled = true;
      this.departmentform.reset();
      this.departmentform.controls['Status'].setValue("Inactive");
      this.departmentform.controls['IsActive'].setValue(false);
      this.departmentform.controls['deptId'].setValue(this.departmentid);  
     }else{
      this.btnname = "Update"
      this.isDisabled =  false;
     }
  // this.GetAllEmployeeDataItems(1,10000);
  this.allemployee;
   if(this.departmentid !=0){
    this.Details(this.departmentid);
    
  }
  }
  GetAllEmployeeDataItems(page: number ,pagesize:number):any{
    debugger;
    this.services.GetAllEmployeeDataItems(page,pagesize).subscribe(
      response => {
        if (!response) {
          console.log(Error)
        } else {
          this.allemployee  = response['Data']
          console.log(this.allemployee)
        }
      });
  }
  Details(departmentid: number):any{
    this.departmentdetail = null;
    this.services.Details(departmentid).subscribe(
      response => {
        if (!response) {
          console.log(Error);
          this.departmentresult = false;
        } else 
        {
          console.log("this.departmentbyid");
          debugger;
          this.departmentdetail  = response;
          console.log(this.departmentdetail);
          if(this.departmentdetail['Result'] == true){
            this.departmentresult = true;
            this.departmentform.controls['deptId'].setValue(this.departmentid);  
               
            this.departmentform.controls['SendAnniversaryMail'].setValue(this.departmentdetail['SendAnniversaryMail']);
            this.departmentform.controls['Id'].setValue(this.departmentdetail['ManagerId']);  
            this.departmentform.controls['Status'].setValue(this.departmentdetail['Status']);
            this.departmentform.controls['IsActive'].setValue(this.departmentdetail['IsActive']);
            }
        }
        return this.departmentresult;
      });
  }


  SaveDepartment(model:any):void{
    debugger;
    console.log(model);
    this.departmentdetail = false;
    this.services.SaveDepartment(model).subscribe(
      response => {
        if (!response) {
          console.log(Error);
          this.departmentresult = false;
        } else 
        {
          console.log("SaveDepartment");
          debugger;
          this.departmentdetail  = response;
          console.log(this.departmentdetail);
          if(this.departmentdetail['Result'] == true){
            this.departmentresult = true;
            }
        }
        if(this.departmentresult){
           if(this.btnname =="Update")
          alert("Department Detail Update Successfully!")
          if(this.btnname =="Add")
          {
          alert("Department Detail Add Successfully!")
          this.departmentform.reset();
          this.departmentform.controls['Status'].setValue("Inactive");
          this.departmentform.controls['IsActive'].setValue(false);
          this.departmentform.controls['deptId'].setValue(this.departmentid); 
          this.router.navigate(['/atlasmenu/departmentsaddedit'], { queryParams: { DeptId: 0 } });
          }
        }else{
          alert("Error!")
        }

      });
  }
  AddClick(event)
  {
    this.router.navigate(['/atlasmenu/departmentsaddedit'], { queryParams: { DeptId: 0 } });
    console.log(this.departmentform.value);
  }
  @HostListener('scroll', ['$event']) 
        scrollHandler(event) {
          console.debug("Scroll Event");
        }

}
