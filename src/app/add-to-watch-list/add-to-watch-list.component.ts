import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import { AppComponent } from '../app.component';
import {Router,ActivatedRoute} from '@angular/router';
import {NgForm, FormControl, FormGroup, Validators} from '@angular/forms';
import {apiservices} from "../ApiServices";

@Component({
  selector: 'app-add-to-watch-list',
  templateUrl: './add-to-watch-list.component.html',
  styleUrls: ['./add-to-watch-list.component.css']
})
export class AddToWatchListComponent implements OnInit {
// tslint:disable-next-line:whitespace
constructor(private api:apiservices , private route : ActivatedRoute) {
}
private res_Data:any;
private userCommente:string;
routeparam:{id:number};
Movilelist: {};
title = 'Star Rating';
starList: boolean[] = [true,true,true,true,true];       // create a list which contains status of 5 stars
rating:number;
movie_id:number;
//Create a function which receives the value counting of stars click,
//and according to that value we do change the value of that star in list.
setStar(data:any){
      this.rating=data+1;
      for(var i=0;i<=4;i++){
        if(i<=data){
          this.starList[i]=false;
        }
        else{
          this.starList[i]=true;
        }
     }
 }



 onSubmit(form: any ) {
  this.userCommente = form.userData.User_Comment;


 this.api.postApi('http://localhost:54419/api/Comment_Movie?ID_User='
 +6+'&Comment_movie='+this.userCommente+'&Movie_id='
 +this.routeparam.id+'&Rating='+this.rating+'').subscribe((res:any)=>{this.res_Data=res;console.log(this.res_Data);},(error)=> console.log(error));




 }



 ngOnInit() {
this.routeparam={
  id:this.route.snapshot.params['id']
};

 }


}
