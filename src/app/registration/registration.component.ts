import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { apiservices } from "../ApiServices";
import { AuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SharedData } from '../SharedData';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private user_Data: { ID_User: string };
  private firstname: string;
  private lastname: string;
  private email: string;
  private username: string;
  private pass: string;
  private User_id: string;
  private user: SocialUser;
  private erro_message: string;

  constructor(private router: Router, private api: apiservices, private authService: AuthService, private getdata: SharedData) { }

  onSubmit(form: any) {
    this.username = form.userData.User_name;
    this.pass = form.userData.Password;
    this.firstname = form.userData.Firstname;
    this.lastname = form.userData.Lastname;
    this.email = form.userData.Email;
    this.api.getallapi('http://localhost:54419/getemail?useremail=' + this.email + '')
      .subscribe((res: any) => {
        this.user_Data = res;
        this.User_id = this.user_Data.ID_User;
        if (this.User_id == null) {
          this.api.postApi('http://localhost:54419/Regstration?email=' + this.email + '&Passowrd=' + this.pass + '&UserName=' + this.username + '&First_Name=' + this.firstname + '&lastname=' + this.lastname + '&soicalid=&oauthtype=Manual')
            .subscribe((res: any) => {
              this.user_Data = res;
              this.User_id = this.user_Data.ID_User;
              this.getdata.user_id.next(this.User_id);
              this.getdata.islogin.next(true);
            }, (error) => console.log(error));
        this.router.navigateByUrl('/Home');


        } else {
          this.erro_message = 'There is account by this email'

        }
      }, (error) => console.log(error));





  }
  ///google///
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.getUserData();
            this.router.navigateByUrl('/Home');





  }

  ////facebook////

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.getUserData()
            this.router.navigateByUrl('/Home');


  }

  ////getdaata/////
  getUserData() {
    this.authService.authState.subscribe((User) => {
      this.user = User;
      this.api.getallapi('http://localhost:54419/getUser?soicalid=' + this.user.id + '')
        .subscribe((res: any) => {
          this.user_Data = res;
          this.User_id = this.user_Data.ID_User;
          if (this.User_id == null) {
            this.api.postApi('http://localhost:54419/Regstration?email=' + this.email + '&Passowrd=' + this.pass + '&UserName=' + this.username + '&First_Name=' + this.firstname + '&lastname=' + this.lastname + '&soicalid=&oauthtype=Manual')
              .subscribe((res: any) => {
                this.user_Data = res;
                this.User_id = this.user_Data.ID_User;
                this.getdata.user_id.next(this.User_id);
                this.getdata.islogin.next(true);
              }, (error) => console.log(error));


          }
        }, (error) => console.log(error));
      this.getdata.user_id.next(this.user.id);
      this.getdata.islogin.next(true);

    });
  }


  ngOnInit() {
  }

}
