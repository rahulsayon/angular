import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.models';
import { MyService } from '../my.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  filteredEmployees: Employee[]; 
  private _searchTerm: string;

  get searchTerm(): string {
 //   console.log(this._searchTerm)
    return this._searchTerm;
  }
    set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchString: string) {
   // console.log(searchString)
    return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }


  constructor(private list:MyService , private router:Router , private _route:ActivatedRoute) { 
        this.employees = this._route.snapshot.data['employeeList'];
        console.log(this.employees)
        if(this._route.snapshot.queryParamMap.has('searchTerm')){
          this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm')
    }
    else{
      this.filteredEmployees = this.employees;
        }
  }

  ngOnInit() {
    
    //this.employeeToDisplay = this.employees[0];
     
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

  onClick(emp :Number){
      this.router.navigate(['employee' , emp] , {
           queryParams:{'searchTerm' : this.searchTerm , 'testParam' : 'testValue'}
      })
     // this.router.navigateByUrl('employee/'+ emp)
  }

   changeEmployeeName(){
     console.log("hello")
       this.employees[0].name = 'jordan';
       this.filteredEmployees = this.filterEmployees(this._searchTerm)
   }

   onMouseMove(){

   }

   onDeleteNotification(id :Number){
     // const i = this.filterEmployees
      const i =  this.filteredEmployees.findIndex(e => e.id == id)
     if(i !== -1){
        this.filteredEmployees.splice(i,1);
     }
     
   }

}
