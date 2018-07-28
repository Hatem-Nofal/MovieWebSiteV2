import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class SharedData {

constructor() {

  
 }
 

  public islogin = new BehaviorSubject<boolean>(false);
  public user_id  = new BehaviorSubject<string>('');
  public loginType  = new BehaviorSubject<string>('');
  public Photourl  = new BehaviorSubject<string>('');
  public Fname  = new BehaviorSubject<string>('');
  public Lastname  = new BehaviorSubject<string>('');



  

}