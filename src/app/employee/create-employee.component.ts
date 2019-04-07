import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.models';
import { MyService } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm:NgForm;
  employee:Employee = {
    
    id:null,
    name:null,
    gender:null,
    email:null,
    phoneNumber:null,
    contactPreference:null,
    dateofBirth:null,
    department:'select',
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

  constructor(private empservice:MyService , private router:Router) { }

  ngOnInit() {
  }

  saveEmployee():void{
     this.empservice.save(this.employee);

     this.router.navigate(['/list'])
  }

}
