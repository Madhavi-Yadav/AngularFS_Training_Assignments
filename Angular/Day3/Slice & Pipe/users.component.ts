import { Component, OnInit } from '@angular/core';
import { Users } from '../models/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  start:number = 0;
  end:number = 4;
  isDisable:boolean = false;

  UserArray:Users[] = [
    {userid : 101, uname : "SCOTT",  email :  "SCOTT@GMAI.COM", gender:"M"} ,
    {userid : 102, uname : "ARBON",  email :  "ARBON@YAHOO.COM", gender:"M"} ,
    {userid : 103, uname : "SMITH",  email :  "SMITH@GMAIL.COM", gender:"M"} ,
    {userid : 104, uname : "EMILEY",  email :  "EMILEY@YAHOO.COM", gender:"F"} ,
    {userid : 105, uname : "SATHYA",  email :  "SATHYA@GMAIL.COM", gender:"M"} ,
    {userid : 106, uname : "VIJYA",  email :  "VIJYA@YAHOO.COM", gender:"M"} ,
    {userid : 107, uname : "JORDANA",  email :  "JORDANA@HOTMAIL.COM", gender:"F"} ,
    {userid : 108, uname : "RAJESH",  email :  "RAJESH@GMAIL.COM", gender:"M"} ,
    {userid : 109, uname : "VENU",  email :  "VENU@HOTMAIL.COM", gender:"M"} ,
    {userid : 110, uname : "RAM",  email :  "RAM@GMAIL.COM", gender:"M"} ,
    
  ];

  nextItems_click()
    {
      if(this.end >= this.UserArray.length)
      {this.isDisable= true;       
      }
      else
      {
        this.end = this.end + 4;
      }
    }
}
