import { Component, OnInit } from '@angular/core';
import { SharedData } from '../SharedData';
import { apiservices } from "../ApiServices";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private getdata: SharedData, private api: apiservices) { }
  userinfo: { User_Name: string, First_Name: string, Last_Name: string, Email: string };
  userdatainfo:{};
  private id: string;
  private username: string
  private fname: string
  private lname: string
  private email: string
  logintype: string

  onSubmit(form: any) {
    this.username = form.userData.Username;
    this.fname = form.userData.Firstname;
    this.lname = form.userData.Lastname;
    this.email = form.userData.Email;
    this.api.postApi('http://localhost:54419/Update/UserInfo?userid=' + this.id + '&email=' + this.email + '&UserName=' + this.username + '&First_Name=' + this.fname + '&lastname=' + this.lname + '')
      .subscribe((res: any) => {
        this.userinfo.User_Name = res[0]['User_Name']
        this.userinfo.First_Name = res[0]['First_Name']
        this.userinfo.Last_Name = res[0]['Last_Name']

        this.userinfo.Email = res[0]['Email']

      }, (error) => console.log(error));




  }
  ngOnInit() {
    this.getdata.loginType.subscribe((val: any) => this.logintype = val);

    if (this.logintype == 'Manual') {
      this.getdata.user_id.subscribe((val: any) => this.id = val);

      this.api.getallapi('http://localhost:54419/GetUserById?userid=' + this.id + '')
        .subscribe((res: any) => {
          console.log(res)
          this.userinfo.User_Name = res[0]['User_Name']
          this.userinfo.First_Name = res[0]['First_Name']
          this.userinfo.Last_Name = res[0]['Last_Name']

          this.userinfo.Email = res[0]['Email']
          
        }, (error) => console.log(error));


    } else if (this.logintype == 'FACEBOOK' || this.logintype == 'GOOGLE') {
      this.getdata.user_id.subscribe((val: any) => this.id = val);
      this.api.getallapi('http://localhost:54419/getUser?soicalid=' + this.id + '')
        .subscribe((res: any) => {
          console.log(res)
          this.userinfo.User_Name = res[0]['User_Name']
          this.userinfo.First_Name = res[0]['First_Name']
          this.userinfo.Last_Name = res[0]['Last_Name']
          this.userinfo.Email = res[0]['Email']
        }, (error) => console.log(error));

    }

  }


}
