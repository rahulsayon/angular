import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';

const routes: Routes = [
  { path:'' ,  redirectTo:'default' , pathMatch:'full'  },
  { path:'default' , component:AppComponent   },
  { path:'list' , component:ListEmployeesComponent },
  {path:'create' , component:CreateEmployeeComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
