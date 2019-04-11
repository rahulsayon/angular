import { Injectable } from '@angular/core';
import { MyService } from './my.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGuardService implements CanActivate {
  constructor(private _employeeservice:MyService ,
     private _router:Router){

  }   
  
  canActivate(route:ActivatedRouteSnapshot ,state:RouterStateSnapshot ):boolean{
          const employeeExist = !!this._employeeservice.getEmployee(+route.paramMap.get('id'))
         if(employeeExist){
            return true;
         }else{
           this._router.navigate(['notfound'])
           return false
         }     
   }
}
