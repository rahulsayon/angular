import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

   public employees:Employee[] = [
        {
            id:1,
            name:'Rahul',
            gender:'Male',
            contactPreference:'Email',
            email:'Rahulsayon@gmail.com',
            dateofBirth : new Date('10/12/1998'),
            department:'IT',
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
          department:'CSE',
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
        department:'CE',
        isActive:true,
        photopath:'assets/images/3.jpg'
      },
   ]

  constructor() { }

  ngOnInit() {
  }

}
