import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from "./angular.component";
import { NetComponent } from './net.component';
import { PythonComponent } from './python.component';
import { JavaComponent } from './java.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Courses'
    },
    children: [
      {
        path: '',
        redirectTo: 'angular'
      },
      {
        path: 'angular',
        component: AngularComponent,
        data: {
          title: 'Angular'
        }
      },
      {
        path: 'net',
        component: NetComponent,
        data: {
          title: 'Net'
        }
      },
      {
        path: 'python',
        component: PythonComponent,
        data: {
          title: 'Python'
        }
      },
      {
        path: 'java',
        component: JavaComponent,
        data: {
          title: 'Java'
        }
      },
     
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
