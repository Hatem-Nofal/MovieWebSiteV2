import { Component, OnInit } from '@angular/core';
import { apiservices } from '../ApiServices';
import { LoginComponent } from '../login/login.component';

import { SharedData } from '../SharedData';


@Component({
  selector: 'app-user-movies-list',
  templateUrl: './user-movies-list.component.html',
  styleUrls: ['./user-movies-list.component.css']
})
export class UserMoviesListComponent implements OnInit {

  constructor(private api: apiservices, private login: LoginComponent, private getdata: SharedData) {
  }
  private res_Data: any;
  private userCommente: string;
  private Movilelist = [];
  MovieListId :any;
  user_id: string;
  starList: boolean[] = [true, true, true, true, true];



  setStar(data: any) {
    
    
  }







  ngOnInit() {
    this.user_id = this.getdata.user_id.getValue();

    this.api.getallapi('http://localhost:54419/api/Comment_Movie?UserID=6')
      .subscribe((MoviIdres: any) => {
       
        if (MoviIdres!= null) {

          for (var index = 0; index < MoviIdres.length; index++) {
           let commentMovie=MoviIdres[index]['User_Comment'];
             let rating =MoviIdres[index]['User_Rate'];
             console.log(rating)
            
             
               
            this.api.getallapi('https://api.themoviedb.org/3/movie/'+MoviIdres[index]['Movie_Id']+'?api_key=71bef96a848a27f3341885acd290dc22&language=en-US')
              .subscribe((Movieres: any) => {
                  
              for (var i = 0; i < 5; i++) {
                  if (i < rating) {
                    this.starList[i] = false;
                  }
                  else {
                    this.starList[i] = true;
                  }
                }
                
                Movieres['revenue']= this.starList.slice(0);
               Movieres['tagline']= commentMovie;
                this.Movilelist.push(Movieres);
            


              }, (error) => console.log(error));
              console.log(this.Movilelist);
             
          }


        }




      }, (error) => console.log(error));





  }



}
