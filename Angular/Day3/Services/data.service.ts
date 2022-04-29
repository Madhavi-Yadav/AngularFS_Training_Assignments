import { Injectable } from '@angular/core';
import { Employee } from './models/Emp';

@Injectable({
  providedIn: 'root'
})
export class DataService {


   dataArray:Employee[] = [
    {"eid":6589,"ename":"SRIRAM","job":"MANAGER","salary":3200,"dept":30},
    {"eid":6369,"ename":"SMITH","job":"CLERK","salary":800,"dept":20},
    {"eid":6499,"ename":"ALLEN","job":"SALESMAN","salary":1600,"dept":30},
    {"eid":6521,"ename":"WARD","job":"ANALYST","salary":1250,"dept":30},
    {"eid":6566,"ename":"JONES","job":"MANAGER","salary":2975,"dept":20},
    {"eid":7654,"ename":"MARTIN","job":"SALESMAN","salary":1250,"dept":30},
    {"eid":7698,"ename":"BLAKE","job":"MANAGER","salary":2850,"dept":30},
    {"eid":7782,"ename":"CLARK","job":"MANAGER","salary":2450,"dept":10}
    ];

    

  public getEmpData():Employee[]
  {
    return this.dataArray;
  }

  AddEmp(empObj:Employee):Employee[]{
    let index:number = this.dataArray.findIndex(item=>item.eid==empObj.eid);
    if(index!=-1) {    
      alert("Duplicate department numbers not allowed !");      
    }
    else {
      this.dataArray.push(empObj);
    }

    return this.getEmpData();
  }

  public RemoveEmp(eno:number)
  {
      let index = this.dataArray.findIndex(item => item.eid == eno);
      this.dataArray.splice(index, 1);
      return this.dataArray;
  }
}
