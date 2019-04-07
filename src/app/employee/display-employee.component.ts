import { Component, OnInit, Input, SimpleChanges , OnChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
private selectedEmployeeId;
  @Input() employee :Employee;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {

    this.selectedEmployeeId =+ this.activateRoute.snapshot.paramMap.get('id')
    console.log(this.selectedEmployeeId)
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

}
