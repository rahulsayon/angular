import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from './models/employee.models';
import { MyService } from './my.service';

@Injectable({
  providedIn: 'root'
})

export class EmployeeListResolveService implements Resolve<Employee[]> {
 
  constructor( private _employeeService:MyService){}
 
  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ):Observable<Employee[]> {
    return this._employeeService.getEmployees()
  }
}