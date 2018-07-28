import { Component, OnInit } from '@angular/core';
import { SharedData } from '../SharedData';
import { AuthService } from "angular4-social-login";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private data: SharedData, private authService: AuthService) { }
   login = true;
   Photourl: string;
   Fname: string;
   Lastname: string;
  ngOnInit() {
    this.data.Photourl.subscribe((val:any)=>this.Photourl =val );
    
  this.data.Fname.subscribe((val:any)=>this.Fname  =val );
     this.data.Lastname.subscribe((val:any)=>this.Lastname =val );
   this.data.islogin.subscribe((val:any)=>this.login =val );
    console.log( this.login)
  }


  signOut(): void {
    this.authService.signOut();
    this.data.islogin.next(false);
  }

}
