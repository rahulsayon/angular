import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService } from '../my.service';
import { Employee } from '../models/employee.models';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employee:Employee;
  public _id : number;

  constructor(private activaterouter:ActivatedRoute , private myservice :MyService , 
    private router:Router) { }

  ngOnInit() {

    //  const  id  = +this.activaterouter.snapshot.params['id']
      // const  id  = +this.activaterouter.snapshot.paramMap.get('id')
      // this.employee = this.myservice.getEmployee(id);

       this.activaterouter.paramMap.subscribe(paramMap => {
             
            this._id = +paramMap.get('id')
           this.employee = this.myservice.getEmployee(this._id);

       })  
  }

  ViewnextEmployee() {
    if(this._id < 3){
        this._id = this._id + 1;
        this.router.navigate(['employee' , this._id])
    }
    else{
      this._id =  1;
      this.router.navigate(['employee' , this._id] , {
        queryParamsHandling:'preserve'
      })
    }
      
  }




}
