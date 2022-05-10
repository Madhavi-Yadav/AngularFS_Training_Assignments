import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-test',
  templateUrl: './prod-test.component.html',
  styleUrls: ['./prod-test.component.css']
})
export class ProdTestComponent implements OnInit {

pname:string ="";
qty:any ="1";
amt:any = 0;
total:string ="";

  constructor() { }

  ngOnInit(): void {
  }

  getTotalAmount()
  {
    this.total = "Total Amount : " + ( this.amt * this.qty);
      }

}
