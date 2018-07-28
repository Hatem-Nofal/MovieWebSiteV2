import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {SharedData } from './SharedData';

import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private data: SharedData  ){}
   login = true;


 
  ngOnInit() {
   
    

  }

}
