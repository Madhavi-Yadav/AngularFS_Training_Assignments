import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-interceptor-demo',
  templateUrl: './interceptor-demo.component.html',
  styleUrls: ['./interceptor-demo.component.css']
})
export class InterceptorDemoComponent implements OnInit {

  ename:string  = "";
  job:string  = "";
  deptno:number  = 0;
  sal:number = 0;
  empno:number = 0;
  empArray:any[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  getData_click()
  {
			this.dataService.getAllemp().subscribe( (resData:any) =>
			{
        console.log(resData);
        this.empArray = resData;
			});
  }

  addData_click() {
    let stObj:any = {};
    stObj.empno = 0;
    stObj.ename = this.ename;
    stObj.deptno = this.deptno;
    stObj.sal = this.sal;
    stObj.job = this.job;

    console.log(stObj);

    this.dataService.addEmployee(stObj).subscribe( (resData:any) =>
    {
      alert("New Employee details are added to database");
      this.getData_click();
    });
    this.clearFields();
  }

  updateData_click() {
    let stObj:any = {};
    stObj.empno = this.empno;
    stObj.ename = this.ename;
    stObj.job = this.job;
    stObj.deptno = this.deptno;
    stObj.sal = this.sal;

    console.log(stObj);

    this.dataService.updateEmployee(stObj).subscribe( (resData:any) =>
    {
       alert("Employee details are update to database");
      this.getData_click();
    });

    this.clearFields();
  }

  deleteData_click(empno:number) {

    this.dataService.deleteEmployee(empno).subscribe( (resData:any) =>
    {
      alert("Employee details are deleted from database");
      this.getData_click();
    });

  }

  selectData_click(empno:number) {

    this.empno = empno;


    // this.dataService.getEmployeeByename().subscribe( (resData:any) =>
    this.dataService.getEmployeeById(empno).subscribe( (resData:any) =>
    {
      this.ename = resData.ename;
      this.deptno = resData.deptno;
      this.job = resData.job;
      this.sal = resData.sal;
    });
  }
  clearFields() {
    this.ename = "";
    this.job = "";
    this.deptno = 0;
    this.sal = 0;
  }
}
