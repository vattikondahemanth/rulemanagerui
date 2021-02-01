import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Rule } from '../../model/rule.model';

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  readonly rooturl ='http://localhost:54254/Api';
list: Rule[] ;
body :any = {"Page":"1", "PageSize":"10"};
constructor(private http: HttpClient) { }


GetAllRules(page:number,pagesize:number)
  {
    debugger; 
    let headers = new HttpHeaders();
    headers.append("Content-type", "application/x-www-form-urlencoded");
    if(page){
      this.body['Page'] = page;
      this.body['PageSize'] = pagesize;
    }
    return this.http.post(this.rooturl + '/EmployeeApi/GetAllRules',this.body);
  } 
}
