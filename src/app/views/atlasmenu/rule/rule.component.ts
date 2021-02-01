import { Component, OnInit } from '@angular/core';


import { RuleService } from "../../../services/masters/rule.service";
import { PagerService } from '../../../services/pager-service.service';
import { Rule } from '../../../model/rule.model';
import { anyChanged } from '@progress/kendo-angular-common';
import { Router } from '@angular/router'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {

  constructor(private router: Router,private services: RuleService ,private pagerService: PagerService,private fb: FormBuilder) { }

  allItems: any;
  pager: any = {};
  pagedItems: any[];
  allrule:any[];
   ngOnInit() {
     this.GetAllRules(1,10000);
     
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
 
 }
 
 GetAllRules(page: number ,pagesize:number):any{
   debugger;
   // this.services.GetAllRules(page,pagesize).subscribe(
   //   response => {
   //     if (!response) {
         
   //       console.log(Error)
   //     } else {
   //       this.allemployee  = response['Data']
   //       console.log(this.allemployee)
   //     }
   //   });
   this.allrule= [
     {
       id :1,
       ruleId:'5fd882b0c7aed9135f115e1b',
       originalRuleId :'5fd882b0c7aed9135f115e1a',
       name :'Client Funding',
       actions :'move_email' ,
       folder_name :'Inbox/Freedom/Client Funding' ,
       precedence :'9999' ,
       conditions :'(subject =~ ".Freedom.|.FREE." or email_from_address =~ ".@freedommortgage.com." or body =~ ".Freedom." and subject =~ ".Funding.|.Batch.")' ,
       stopProcessing :true,
       isActive :true,
       ruleType :1 ,
       serviceName:'test' 
      
     },
     ];
 }

 EditRule(ruleId : string, id: number ) {
  this.router.navigate(['/atlasmenu/rule-edit'], { queryParams: { ruleId: ruleId, id: id } });
}




}
