import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserMoviesListComponent } from './user-movies-list/user-movies-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import {apiservices} from './ApiServices';
import {Routes , RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddToWatchListComponent } from './add-to-watch-list/add-to-watch-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {SharedData } from './SharedData';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

// tslint:disable-next-line:typedef-whitespace
const appRoutes : Routes = [
  { path: 'Home' , component : HomeComponent},
  { path: '' , component : LoginComponent},
  { path: 'registration' , component : RegistrationComponent},
  { path: 'MyProfile' , component : UserProfileComponent},
  { path: 'userMovieList' , component : UserMoviesListComponent},
  { path: 'AddToWatchListComponent/:id' , component : AddToWatchListComponent}




];


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("719744870503-7of74318c3cgsu34c4q2ak5ht6ip0pem.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1991228774502652")
  }
]);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserMoviesListComponent,
    UserProfileComponent,
    HomeComponent,
    AddToWatchListComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    HttpModule,
     FormsModule,
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      ReactiveFormsModule,
      SocialLoginModule.initialize(config)
  ],
  providers: [apiservices,
     FormsModule,HomeComponent,LoginComponent,SharedData],
  bootstrap: [AppComponent]
})
export class AppModule { }
