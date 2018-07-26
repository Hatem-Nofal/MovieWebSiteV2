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
routeparam:{id:number,userid:number};
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


  // url="http://localhost:34224/api/Commen_Movie?ID_User={ID_User}&Comment_movie={Comment_movie}&Movie_id={Movie_id}&rate={rate}""
 this.api.postApi('http://localhost:34224/api/Commen_Movie?ID_User='
 +this.routeparam.userid+'&Comment_movie='+this.userCommente+'&Movie_id='
 +this.routeparam.id+'&rate='+this.rating+'').subscribe((res:any)=>{this.res_Data=res;console.log(this.res_Data);},(error)=> console.log(error));




 }



 ngOnInit() {
this.routeparam={
  id:this.route.snapshot.params['id'],
  userid:this.route.snapshot.params['userid']
};

 }
//    this.api.getapi('https://api.themoviedb.org/3/movie/popular?api_key=71bef96a848a27f3341885acd290dc22&language=en-US&page=1')
//      .subscribe((res:any)=>{this.Movilelist=res;},(error)=> console.log(error));

//  }
//  getMovie(movi_id : number)
//  {
//   this.api.getapi('https://api.themoviedb.org/3/movie/popular?api_key=71bef96a848a27f3341885acd290dc22&language=en-US&page=1')
//   .subscribe((res:any)=>{this.Movilelist=res;},(error)=> console.log(error));

//  }

}
