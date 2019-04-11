import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { CreateEmployeeCanDeactiveGuardService } from './create-employee-can-deactive-guard.service';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { EmployeeListResolveService } from './employee-list-resolve.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsGuardService } from './employee-details-guard.service';

const routes: Routes = [
  { path:'' ,  redirectTo:'default' , pathMatch:'full'  },
  { path:'default' , component:AppComponent   },
  { path:'list' , component:ListEmployeesComponent , resolve:{ employeeList:EmployeeListResolveService  } },
  {path:'create' , component:CreateEmployeeComponent,
               canDeactivate:[CreateEmployeeCanDeactiveGuardService] },
{path:'edit/:id' , component:CreateEmployeeComponent,
               canDeactivate:[CreateEmployeeCanDeactiveGuardService] },
  {path:'employee/:id' ,canActivate:[EmployeeDetailsGuardService] ,component:EmployeeDetailsComponent},
  { path:'notfound' , component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
