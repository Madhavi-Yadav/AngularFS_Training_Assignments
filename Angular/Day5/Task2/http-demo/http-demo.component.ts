import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent  {

  constructor(private httpclient: HttpClient) { }


UserArray : any  = [];
 
get_data()
{
let  url = "https://reqres.in/api/users";

this.httpclient.get(url).subscribe(data => {
  this.UserArray = data;
  console.log(this.UserArray);
});
}
}