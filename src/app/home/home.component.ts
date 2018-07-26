import {Component, OnInit} from '@angular/core';
import { Observable } from "rxjs/Rx"
import {apiservices} from "../ApiServices";

import {LoginComponent} from '../login/login.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
Movilelist: {};
user_id:number;


  constructor(private api:apiservices ,private login:LoginComponent ) {
  }




  ngOnInit() {
this.user_id=this.login.User_id;
    this.api.getapi('https://api.themoviedb.org/3/movie/popular?api_key=71bef96a848a27f3341885acd290dc22&language=en-US&page=1')
      .subscribe((res:any)=>{this.Movilelist=res;},(error)=> console.log(error));

  }

}
