import { Component, OnInit } from '@angular/core';
import{apiservices} from '../ApiServices';
import {LoginComponent} from '../login/login.component';
import { MoviesList } from './../MoviesLIstMoudel';

@Component({
  selector: 'app-user-movies-list',
  templateUrl: './user-movies-list.component.html',
  styleUrls: ['./user-movies-list.component.css']
})
export class UserMoviesListComponent implements OnInit {

  constructor(private api:apiservices ,private login:LoginComponent ) {
  }
  private res_Data:any;
  private userCommente:string;

Movilelist: {};
MovileIDlist: [];
user_id:number;
  starList: boolean[] = [true,true,true,true,true];       // create a list which contains status of 5 stars
  rating:number;
  movie_id:number;
  //Create a function which receives the value counting of stars click,
  //and according to that value we do change the value of that star in list.
  setStar(data:any){
        this.rating=data+1;
        for(var i=0;i<=5;i++){
          if(i<=data){
            this.starList[i]=false;
          }
          else{
            this.starList[i]=true;
          }
       }
   }







   ngOnInit() {
    this.user_id=this.login.User_id;
     this.api.getapi('https://api.themoviedb.org/3/movie/popular?api_key=71bef96a848a27f3341885acd290dc22&language=en-US&page=1')
       .subscribe((res:any)=>{this.Movilelist=res;},(error)=> console.log(error));

   }
   for(number id , Movilelist)
   {
    //this.MovileIDlist.push(id.Movie_Id);

   }
   getMovie(movi_id : number)
   {
    this.api.getapi('https://api.themoviedb.org/3/movie/popular?api_key=71bef96a848a27f3341885acd290dc22&language=en-US&page=1')
    .subscribe((res:any)=>{this.Movilelist=res;},(error)=> console.log(error));

   }

}
