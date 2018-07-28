import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { apiservices } from "../ApiServices";
import { AuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SharedData } from '../SharedData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private api: apiservices, private authService: AuthService, private getdata: SharedData) { }
  private user_Data: { ID_User: string };
  private username: string;
  private pass: string;
  private User_id: string;
  private user: SocialUser;


  onSubmit(form: any) {
    this.username = form.userData.User_name;
    this.pass = form.userData.Password;
    this.api.getallapi('http://localhost:54419/api/Login?UserName=' + this.username + '&Passowrd=' + this.pass + '')
      .subscribe((res: any) => {
        this.user_Data = res;
        this.User_id = this.user_Data.ID_User;
        this.getdata.user_id.next(this.User_id);
        this.getdata.islogin.next(true);
        this.getdata.loginType.next('Manual');
        this.router.navigateByUrl('/MyProfile');
      }, (error) => console.log(error));



  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.getUserData()



  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.getUserData()
  }


  getUserData() {
    this.authService.authState.subscribe((User) => {
      this.user = User;
      console.log(User);
      this.getdata.user_id.next(this.user.id);
      this.getdata.islogin.next(true);
      this.getdata.loginType.next(this.user.provider);
      this.getdata.Photourl.next(this.user.photoUrl);
      this.getdata.Fname.next(this.user.firstName);
      this.getdata.Lastname.next(this.user.lastName);
              this.router.navigateByUrl('/MyProfile');



    });
  }






}
