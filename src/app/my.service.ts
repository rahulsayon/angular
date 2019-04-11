import { Injectable } from '@angular/core';
import { Employee } from './models/employee.models';
import {observable, Observable} from "rxjs/index";
import { of } from 'rxjs';
import {delay} from "rxjs/internal/operators";
import { E2BIG } from 'constants';


@Injectable({
  providedIn: 'root'
})
export class MyService {

  public employees:Employee[] = [
    {
        id:1,
        name:'Rahul',
        gender:'Male',
        contactPreference:'email',
        email:'Rahulsayon@gmail.com',
        dateofBirth : new Date('10/12/1998'),
        department:'1',
        isActive:true,
        photopath:'assets/images/1.jpg'
    },
    {
      id:2,
      name:'Raj',
      gender:'Male',
      contactPreference:'phone',
      email:'Rahul@gmail.com',
      dateofBirth : new Date('10/12/2018'),
      department:'2',
      isActive:true,
      photopath:'assets/images/2.jpeg'
    },
  {
    id:3,
    name:'joy',
    gender:'Male',
    contactPreference:'email',
    email:'Ranjan@gmail.com',
    dateofBirth : new Date('10/12/2018'),
    department:'1',
    isActive:true,
    photopath:'assets/images/3.jpg'
  },
]

  constructor() {
   }  

   getEmployees():Observable<Employee[]> {
          return  of(this.employees).pipe(delay(2000));
   }

   getEmployee(id:number){
       return this.employees.find(e => e.id == id)
   }

   save(employee){
     if(employee.id == null){
       const maxid = this.employees.reduce(function(e1,e2) {
         return (e1.id > e2.id) ? e1:e2;
       }).id;
       employee.id = maxid +1;
      this.employees.push(employee);
     }
     else{
       const foundIndex = this.employees.findIndex(e=> e.id == employee.id)
       this.employees[foundIndex] = employee;
     }
    }

      deleteEmployee(id:number){
          const i =  this.employees.findIndex(e => e.id === id);
            if(i !== -1){
               this.employees.splice(i , 1)
            }
      }
}
