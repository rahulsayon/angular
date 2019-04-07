import { Injectable } from '@angular/core';
import { CanDeactivate , ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactiveGuardService  implements CanDeactivate<CreateEmployeeComponent>  {
    
    canDeactivate(component: CreateEmployeeComponent): boolean {
        if(component.createEmployeeForm.dirty){
           return confirm('Are You sure want to discard?');
        }
          return true;
    }
  
}
