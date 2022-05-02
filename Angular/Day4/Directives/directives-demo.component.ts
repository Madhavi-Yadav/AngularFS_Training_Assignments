import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent  {

  displayMode:string  = "List";

  public  productsArray:any[] = [
    {pid : 101, pname : "TV",  category :  "Home Appliances", price:15000, picture:"tv.png" } ,
    {pid : 102, pname : "Speaker",  category :  "Gadget" , price:5000 , picture:"speakers.png" },
    {pid : 103, pname : "Mobile",  category :  "Gadget" , price:20000, picture:"mobile.png" },
    {pid : 104, pname : "Camera",  category :  "Gadget" , price:10000, picture:"shopping.png" },
    {pid : 105, pname : "Fan",  category :  "Home Appliances" , price:9000, picture:"fan.png" },
     ];


     
SetDisplay(mode:string){
  this.displayMode = mode;
}
}
