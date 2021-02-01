import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
//payal
import { HttpClientModule } from '@angular/common/http';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';

//kindow 

import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ChartModule } from '@progress/kendo-angular-charts';
//mport { InputsModule } from "@progress/kendo-angular-inputs";
import { RatingComponent } from './rating.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';


const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
  
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DepartmentsService } from './services/masters/departments.service';
//import { RuleComponent } from './views/rule/rule.component';
//import { ConfirmationDialogComponent } from './views/confirmation-dialog/confirmation-dialog.component';
// import { OverviewComponent } from './views/atlasmenu/overview/overview.component';
// import { BygroupComponent } from './views/atlasmenu/bygroup/bygroup.component';
// import { ByresponsibleComponent } from './views/atlasmenu/byresponsible/byresponsible.component';
// import { PhonenumberComponent } from './views/atlasmenu/phonenumber/phonenumber.component';
// import { ApidocumentComponent } from './views/atlasmenu/apidocument/apidocument.component';
// import { AdminstrationComponent } from './views/atlasmenu/adminstration/adminstration.component';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,GridModule, PDFModule, ExcelModule,ChartModule

    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    RatingComponent,
    //RuleComponent,
  //  ConfirmationDialogComponent,
    // OverviewComponent,
    // BygroupComponent,
    // ByresponsibleComponent,
    // PhonenumberComponent,
    // ApidocumentComponent,
    // AdminstrationComponent,

    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    DepartmentsService
  //   {
  //   provide: LocationStrategy,
  //   useClass: PathLocationStrategy
  // }
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
