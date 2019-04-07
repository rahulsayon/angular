import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.models';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee = {
    
    id:null,
    name:null,
    gender:null,
    email:null,
    phoneNumber:null,
    contactPreference:null,
    dateofBirth:null,
    department:null,
    isActive:null,
    photopath:null,

  }

  departments:Department[] = [
      { id:1 , name:'Help Disk' },
      { id:2 , name:'Hr' },
      { id:3 , name:'It' },
      { id:4 , name:'Network' }
    ]
   
    previewPhoto = false;

    togglePhotoPreview(){
       this.previewPhoto = !this.previewPhoto
    }

  //gender  = 'male'

  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm :NgForm){
    console.log(empForm.value)
  }

}
