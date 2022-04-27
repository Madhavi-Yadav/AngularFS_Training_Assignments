import { Component, OnInit } from '@angular/core';
//import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   
    pname:string ="";
    price:number=0;
    qty:number =0;
    Total:number=0;
    Color:string="";

    GetTotal()
    {
      this.Total = (this.price*this.qty);
      if(this.Total>10000)
      {
        this.Color="green"

      }
      else{
        this.Color="blue"
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
