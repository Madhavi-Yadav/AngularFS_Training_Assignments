import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  deptsArray:Product[] = [
    {pid : 101, pname : "TV",  category :  "Electronic", price:15000, qty:1} ,
    {pid : 102, pname : "Speaker",  category :  "Gadget" , price:5000, qty:2},
    {pid : 103, pname : "Mobile",  category :  "Electronic" , price:20000, qty:1},
    {pid : 104, pname : "Camera",  category :  "Gadget" , price:10000, qty:2},
    {pid : 105, pname : "Fan",  category :  "Electronic" , price:9000, qty:1},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
