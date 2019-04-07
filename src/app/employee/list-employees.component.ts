import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.models';
import { MyService } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[];
  employeeToDisplay: Employee;
  public  arrayIndex ;
  public  dataFromChild;

  constructor(private list:MyService , private router:Router) { }

  ngOnInit() {
    this.employees = this.list.getEmployees();
    this.employeeToDisplay = this.employees[0];

  }
  
  nextEmployee():void{
    if(this.arrayIndex <= 2){
      this.employeeToDisplay = this.employees[this.arrayIndex]
      this.arrayIndex++;
    }
    else{
        this.employeeToDisplay = this.employees[0];
        this.arrayIndex = 1;
    }
  }

  handleNotify(eventData:string){
   this.dataFromChild = eventData;
  }

  onClick(emp){
      this.router.navigate(['employee' , emp])
     // this.router.navigateByUrl('employee/'+ emp)
  }


}
