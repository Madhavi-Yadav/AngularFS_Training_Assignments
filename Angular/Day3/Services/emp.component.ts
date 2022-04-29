import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../models/Emp';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent  {
  eid:number = 0;
  ename:string = "";
  job:string = "";
  salary:number = 0;
  dept:number = 0;

  public empsArray:Employee[] = [];


  constructor(private _dataService:DataService) { }

  ngOnInit()
  {
    this.getData_click();
  }

  getData_click()
  {
    this.empsArray = this._dataService.getEmpData();
  }

  addData_click()
  {
    let empObj:Employee = new Employee();
      empObj.eid = this.eid;
      empObj.ename = this.ename;
      empObj.dept = this.dept;
      empObj.salary = this.salary;
      empObj.job = this.job;

     this.empsArray = this._dataService.AddEmp(empObj);
     this.clear()
     alert("Record added successfully.");
  }

  removeData_click(eno:number)
  {
     this.empsArray = this._dataService.RemoveEmp(eno);
     alert("Record removed successfully.");
  }

  clear()
  {
    this.eid=0;
    this.ename="";
     this.dept=0;
     this.salary=0;
    this.job="";

  }
 }
