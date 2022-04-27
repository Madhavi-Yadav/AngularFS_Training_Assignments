import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent  {

  public ename:string  = "Stephen";
  public eid:number  = 54654564;
  public esalary:number  = 75000;
  public edept:number = 10;
  public ejob:string = "Manager";

}
