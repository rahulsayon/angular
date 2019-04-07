import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { CreateEmployeeCanDeactiveGuardService } from './create-employee-can-deactive-guard.service';
import { EmployeeDetailsComponent } from './employee/employee-details.component';

const routes: Routes = [
  { path:'' ,  redirectTo:'default' , pathMatch:'full'  },
  { path:'default' , component:AppComponent   },
  { path:'list' , component:ListEmployeesComponent },
  {path:'create' , component:CreateEmployeeComponent ,
               canDeactivate:[CreateEmployeeCanDeactiveGuardService] },
  {path:'employee/:id' , component:EmployeeDetailsComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
