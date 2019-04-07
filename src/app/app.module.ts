import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { SelectRequiredValidator } from './shared/select-required-validator.directive';
import {  ConfirmEqualValidator } from './shared/confirm-equal-validator.directive';
import { DisplayEmployeeComponent } from './employee/display-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidator,
    ConfirmEqualValidator,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
