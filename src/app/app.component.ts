<<<<<<< HEAD
import {Component} from '@angular/core';
import {OnInit} from "@angular/core";

import {HomeComponent} from "./home/home.component";
=======
import { Component } from '@angular/core';
>>>>>>> initial commit

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css'],
  providers:[HomeComponent]
})
export class AppComponent implements OnInit{

  constructor(private movielist: HomeComponent  ){}
  // login = false;


  login(){
    console.log("adding form values ");

  }
  ngOnInit() {
  }

=======
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
>>>>>>> initial commit
}
