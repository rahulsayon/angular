import { Component, OnInit, Input, SimpleChanges , OnChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.models';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService } from '../my.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
private selectedEmployeeId;
  @Input() employee :Employee;
  @Input() searchTerm;
  @Output() notifyDelete :EventEmitter<number> = new EventEmitter() ;
  ConfirmDelete = false;
  constructor(private activateRoute:ActivatedRoute ,private router:Router, private myservice:MyService) { }
  
  ngOnInit() {

    this.selectedEmployeeId =+ this.activateRoute.snapshot.paramMap.get('id')
   // console.log(this.selectedEmployeeId)
  }


  // ngOnChanges(changes: SimpleChanges): void {
    
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue
  //   console.log('previous' + (previousEmployee ? previousEmployee.name : 'Null'))
  //   console.log('Current' +  currentEmployee.name)
  // }

  @Output() notify: EventEmitter<any> = new  EventEmitter<string>();
  handleClick(){
      this.notify.emit(this.employee)
  }

  viewEmployee(){
    this.router.navigate(['employee',this.employee.id ],{ queryParams: this.searchTerm })
  }

  editEmployee(){
     this.router.navigate(['/edit' , this.employee.id ])
  }

  deleteEmployee(){
      
    this.myservice.deleteEmployee(this.employee.id)
    this.notifyDelete.emit(this.employee.id)
  }

}
