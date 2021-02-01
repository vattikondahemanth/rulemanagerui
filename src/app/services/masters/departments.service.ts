import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Departments } from '../../model/departments.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
// readonly rooturl ='http://localhost:54254/Api/DepartmentApi';
readonly rooturl ='http://localhost:54254/Api';
//formdata: Departments;
list: Departments[] ;
body :any = {"Page":"1", "PageSize":"10"};
//department : any = {"Id":"0"};
department : any = {"Id":"0","Name":null,"SendAnniversaryMail":true,"SendAnniversaryEmail":null,"ManagerId":0,"ManagerName":null,"ManagerEmpNumber":null,"IsActive":false,"Status":false,"Result":false};
res : any;
  constructor(private http: HttpClient) { }

GetDepartmentdetails_old()
  {
    debugger;
    return this.http.get(this.rooturl + '/Departments')
    .toPromise()
    .then(res =>this.list = res as Departments[] ) ;
  }
GetDepartmentdetail(page:number)
  {
    debugger; 
    let headers = new HttpHeaders();
    //return this.http.get(this.rooturl + '/Departments');
    headers.append("Content-type", "application/x-www-form-urlencoded");
    if(page){
      this.body['Page'] = page;
      this.body['PageSize'] = 10;
    }
    return this.http.post(this.rooturl + '/DepartmentApi/GetDepartmentList',this.body);
  } 
GetAllEmployeeDataItems(page:number,pagesize:number)
  {
    debugger; 
    let headers = new HttpHeaders();
    headers.append("Content-type", "application/x-www-form-urlencoded");
    if(page){
      this.body['Page'] = page;
      this.body['PageSize'] = pagesize;
    }
    return this.http.post(this.rooturl + '/EmployeeApi/GetAllEmployeeDataItems',this.body);
  } 
RemoveDepartment(departmentid: number) {
  var headers = new Headers();
  headers.append("Content-type", "application/x-www-form-urlencoded");
  console.log("removeItem:" + departmentid);
  this.department['Id']= departmentid ;
  return this.http.post(this.rooturl + '/DepartmentApi/RemoveDepartment', this.department);
}
ToggleIsActive(departmentid: number) {
var headers = new Headers();
headers.append("Content-type", "application/x-www-form-urlencoded");
console.log("ToggleIsActive:" + departmentid);
this.department['Id']= departmentid ;
return this.http.post(this.rooturl + '/DepartmentApi/ToggleIsActive', this.department);
}
Details(departmentid: number) {
  var headers = new Headers();
  headers.append("Content-type", "application/x-www-form-urlencoded");
  console.log("Details:" + departmentid);
  this.department['Id']= departmentid ;
  return this.http.post(this.rooturl + '/DepartmentApi/Details', this.department);
  }
  SaveDepartment(model: any) {
    var headers = new Headers();
    headers.append("Content-type", "application/x-www-form-urlencoded");
    console.log("SaveDepartment:" + model);
    this.department['Id']= model['deptId'] ;
    this.department['Name']= model['Name'];
    this.department['SendAnniversaryMail']= model['SendAnniversaryMail'] ;
    this.department['ManagerId']= model['Id'] ;
    this.department['Status']= model['Status'] ;
     this.department['IsActive']= model['IsActive'] ;
    return this.http.post(this.rooturl + '/DepartmentApi/SaveDepartment', this.department);
    }



}
