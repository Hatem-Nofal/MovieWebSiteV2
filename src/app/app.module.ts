import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserMoviesListComponent } from './user-movies-list/user-movies-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import {apiservices} from './ApiServices';
import {MoviesList} from './MoviesLIstMoudel';
import {Routes , RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddToWatchListComponent } from './add-to-watch-list/add-to-watch-list.component';


// tslint:disable-next-line:typedef-whitespace
const appRoutes : Routes = [
  { path: '' , component : HomeComponent},
  { path: 'login' , component : LoginComponent},
  { path: 'registration' , component : RegistrationComponent},
  { path: 'MyProfile' , component : UserProfileComponent},
  { path: 'userMovieList' , component : UserMoviesListComponent},
  { path: 'About' , component : AboutComponent},
  { path: 'AddToWatchListComponent/:id/:userid' , component : AddToWatchListComponent}




];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserMoviesListComponent,
    UserProfileComponent,
    HomeComponent,
    AboutComponent,
    AddToWatchListComponent

  ],
  imports: [
    HttpModule,
     FormsModule,
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      ReactiveFormsModule
  ],
  providers: [apiservices,
    MoviesList, FormsModule],
=======

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
>>>>>>> initial commit
  bootstrap: [AppComponent]
})
export class AppModule { }
