import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.models';
import { MyService } from '../my.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm:NgForm;
  employee:Employee ;

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

  constructor(private empservice:MyService , private router:ActivatedRoute,
    private _router:Router) { }

  ngOnInit() {
     this.router.paramMap.subscribe( parameterMap =>{

          const id  =+parameterMap.get('id')
          this.getEmployee(id)
     })
  }

  getEmployee(id:number){

    if(id == 0){

       this.employee = {
    
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

    }else{
        this.employee = this.empservice.getEmployee(id);
    }

  }

  saveEmployee():void{
     const newEmployee:Employee = Object.assign({} , this.employee);
     this.empservice.save(newEmployee)
      this.createEmployeeForm.reset()
      this._router.navigate(['/list'])
  }

}
