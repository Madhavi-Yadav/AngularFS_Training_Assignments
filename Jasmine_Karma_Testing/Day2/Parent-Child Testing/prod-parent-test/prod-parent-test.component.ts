import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-parent-test',
  templateUrl: './prod-parent-test.component.html',
  styleUrls: ['./prod-parent-test.component.css']
})
export class ProdParentTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  prodArray:any[] = [
    {pid : 101, pname : "TV",  category :  "Electronic", price:15000, qty:1} ,
    {pid : 102, pname : "Speaker",  category :  "Gadget" , price:5000, qty:2},
    {pid : 103, pname : "Mobile",  category :  "Electronic" , price:20000, qty:1},
    {pid : 104, pname : "Camera",  category :  "Gadget" , price:10000, qty:2},
    {pid : 105, pname : "Fan",  category :  "Electronic" , price:9000, qty:1},
  ];

  public  removeProd(pid: number)
	{
		 var index =  this.prodArray.findIndex((x:any) => x.pid == pid);
		 this.prodArray.splice(index, 1);
	}
  
}
