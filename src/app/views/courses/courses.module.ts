// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {  CoursesRoutingModule } from "./courses-routing.module";
import { AngularComponent } from './angular.component';
import { PythonComponent } from './python.component';
import { NetComponent } from './net.component';
import { JavaComponent } from './java.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule,
    ReactiveFormsModule ,
    TabsModule
    
  
  ],
  declarations: [
   AngularComponent,
   NetComponent ,
   PythonComponent,
   JavaComponent
  ]
})
export class CoursesModule { }
