// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {  AtlastmenuRoutingModule } from "./atlasmenu-routing.module";
import { OverviewComponent } from './overview/overview.component';
import { BygroupComponent } from './bygroup/bygroup.component';
import { ByresponsibleComponent } from './byresponsible/byresponsible.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { ApidocumentComponent } from './apidocument/apidocument.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DepartmentsComponent } from './adminstration/departments/departments/departments.component';
import { DepartmentsaddeditComponent } from './adminstration/departmentsaddedit/departmentsaddedit.component';

import { RuleComponent } from './rule/rule.component';
import { RuleEditComponent } from './rule-edit/rule-edit.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AtlastmenuRoutingModule,
    ReactiveFormsModule ,
    TabsModule
    
  
  ],
  declarations: [
   OverviewComponent,
   ByresponsibleComponent ,
   BygroupComponent,
   PhonenumberComponent ,
   ApidocumentComponent,
   AdminstrationComponent,
   EditemployeeComponent,
   AddemployeeComponent,
   DepartmentsComponent,
   DepartmentsaddeditComponent,
   RuleComponent,
   RuleEditComponent
  ]
})
export class AtlastmenuModule { }
