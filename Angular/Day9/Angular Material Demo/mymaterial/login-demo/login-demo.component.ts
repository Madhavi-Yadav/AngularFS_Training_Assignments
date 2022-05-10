import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthtokenService } from 'src/app/authtoken.service';

@Component({
  selector: 'app-login-demo',
  templateUrl: './login-demo.component.html',
  styleUrls: ['./login-demo.component.css']
})
export class LoginDemoComponent implements OnInit {

  result:string = "";
  uname:string = "";
  pwd:string = "";
  error:boolean= false;

   form: FormGroup = new FormGroup({
     uname: new FormControl('',Validators.required),
     pwd: new FormControl('',Validators.required),
   });

  constructor(private authServices:AuthtokenService) {
 }

  ngOnInit(): void {

  }

  
  login() : void {
    if(this.uname == 'admin' && this.pwd == 'admin123'){
      alert("Login Successful.");
    }else {
      alert("Invalid credentials, login failed !");
    }
  }

  //  public submit_click():void
  // {
  //   let formObj = this.form.value;
  //  this.authServices.getTokenForValidUser(this.uname, this.pwd)
  //  .subscribe(
  //    {
  //      next :  (resData:any) =>  {
  //        this.result = "Valid User.  Access Token :  " + resData.accessToken;
  //        sessionStorage.setItem("AUTH_TOKEN",  resData.accessToken);
  //        console.log(resData.accessToken);
  //      },
  //     error : (error:any) =>  {
  //         this.result  = "Invalid user id or password. Error Message : " + error.message;
  //         error = true;
  //         console.log(error);
  //      }
  //    }
  //  );
  // }


}
