import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeptService {
  deptObj = {deptno : 50, dname : "HR",  loc :  "Hyd"};

  constructor() { }

  deptsArray:any[] = [
    {deptno : 10, dname : "Accounts",  loc :  "Banglore"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Mumbai"},
    {deptno : 40, dname : "Admin ",  loc :  "Chennai"}
  ];

  addDept(deptObj:any ){
    let index:number = this.deptsArray.findIndex(item=>item.deptno==deptObj.deptno);
      if(index==-1)   
        this.deptsArray.push(deptObj);  
  }

  removeDept(dno:number)
  { 
      let index = this.deptsArray.findIndex(item => item.deptno == dno);
      if(index!=-1)   
    this.deptsArray.splice(index, 1);
  }
  
}
