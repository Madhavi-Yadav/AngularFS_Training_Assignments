import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-forms',
  templateUrl: './model-forms.component.html',
  styleUrls: ['./model-forms.component.css']
})
export class ModelFormsComponent implements OnInit {

  RegForm:FormGroup = new FormGroup({
    oname : new FormControl("", Validators.required),
    cnumber : new FormControl("", [Validators.required,Validators.pattern("\\d{10}")]),
    vregno : new FormControl("", [Validators.required, Validators.pattern("[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}")]),
    email : new FormControl("", [Validators.required,Validators.email]),
    address : new FormControl("", Validators.required),
    model:new FormControl("", Validators.pattern("[a-z]{1,10}")),
    color:new FormControl("", Validators.required),
    //year:new FormControl("", Validators.pattern("\\b(201[2-9]|2020|202[1-2])\\b")),
    year:new FormControl("", [Validators.min(2012),Validators.max(2022)])
  });

 constructor() { }

 ngOnInit(): void {
 }



 public submit_click():void
 {
     // ajax call to send data to server
     alert("Vehical Registration is Successful.");
     let VehicleObj = this.RegForm.value;
     console.log(VehicleObj);
 }

}
