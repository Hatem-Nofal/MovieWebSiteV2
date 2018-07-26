import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import { Observable } from "rxjs/Rx"

import {  Response } from "@angular/http"
// import {MoviesList} from './MoviesLIstMoudel';
import "rxjs/Rx";

@Injectable()
export class apiservices {
  constructor(private http:HttpClient) {
  }


result:any;
  getapi(Url: string){
    return this.http.get<any>(Url, {responseType: 'json'})
      .map((res: Response) =>
      { return this.result=res['results'];
        });


  }



//post///
  postApi(URl: string){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(URl ,"",{headers: headers} );



  }
}
