import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import { AppComponent } from '../app.component';
import {Router} from '@angular/router';
import {NgForm,FormControl, FormGroup, Validators} from '@angular/forms';
import {apiservices} from "../ApiServices";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  // signupForm: FormGroup;
  // @ViewChild('User_name') username:ElementRef;
  constructor(private router: Router,private api:apiservices) { }
private user_Data:any;
private username:string;
private pass :string ;
User_id:number;
  onSubmit(form:any ){
   this.username=form.userData.User_name;
    this. pass=form.userData.Password;

    //url="http://localhost:34224/api/Login?UserName="+username+"&Passowrd="+pass+""
this.api.getapi('http://localhost:34224/api/Login/LoginUser?UserName='+this.username+'&Passowrd='+this.pass+'')
      .subscribe((res:any)=>{this.user_Data=res;console.log(this.user_Data);
      this.User_id=this.user_Data.ID_User
      },(error)=> console.log(error));



  }




}
