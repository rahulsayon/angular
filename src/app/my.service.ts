import { Injectable } from '@angular/core';
import { Employee } from './models/employee.models';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  public employees:Employee[] = [
    {
        id:1,
        name:'Rahul',
        gender:'Male',
        contactPreference:'Email',
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
      contactPreference:'Email',
      email:'Rahul@gmail.com',
      dateofBirth : new Date('10/12/2018'),
      department:'2',
      isActive:true,
      photopath:'assets/images/2.jpeg'
    },
  {
    id:3,
    name:'Ranjan',
    gender:'Male',
    contactPreference:'Email',
    email:'Ranjan@gmail.com',
    dateofBirth : new Date('10/12/2018'),
    department:'1',
    isActive:true,
    photopath:'assets/images/3.jpg'
  },
]

  constructor() {
   }  

   getEmployees():Employee[] {
          return this.employees;
   }

   getEmployee(id:number){
       return this.employees.find(e => e.id == id)
   }

   save(employee){
        this.employees.push(employee);
   }

}
