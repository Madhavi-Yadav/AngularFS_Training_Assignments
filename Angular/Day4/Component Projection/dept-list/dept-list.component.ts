import { Component, OnInit } from '@angular/core';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  deptno:number = 0;
  dname:string = "";
  loc:string = "";

  deptsArray:Dept[] = [
    {deptno : 10, dname : "Accounts",  loc :  "Banglore"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Mumbai"},
    {deptno : 40, dname : "Admin ",  loc :  "Chennai"}
  ];

  constructor() { }

  ngOnInit(): void {
  }


  updateDept_click(dno:number)
  {
    if(confirm("Are you sure you want to update this entry?")) {
    let objIndex = this.deptsArray.findIndex((obj => obj.deptno == dno));
    this.deptsArray[objIndex].dname =  this.dname ;
    this.deptsArray[objIndex].loc =  this.loc ;
    this.clear();
    }
  }

  addDept_click()
  {   
    
      let deptObj:Dept = new Dept();
      deptObj.deptno = this.deptno;
      deptObj.dname = this.dname;
      deptObj.loc = this.loc;
      let index:number = this.deptsArray.findIndex(item=>item.deptno==this.deptno);
      if(index!=-1) {    
        alert("Duplicate department numbers not allowed !");      
      }
      else {
        this.deptsArray.push(deptObj);
        this.clear();
      }
      
  }


  delete_click(dno:number)
  {
    if(confirm("Are you sure you want to delete this entry?")) {
      let index = this.deptsArray.findIndex(item => item.deptno == dno);
    this.deptsArray.splice(index, 1);
  }
   
  }

  select_click(dno:number)
  {
    let deptObj:any = this.deptsArray.find(item => item.deptno == dno);
    this.deptno = deptObj.deptno;
    this.dname = deptObj.dname;
    this.loc = deptObj.loc;
  }

  clear ()
  {
this.deptno=0;
this.dname="";
this.loc= "";

  }

}
