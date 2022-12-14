import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AngularFireModule} from "@angular/fire/compat"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyC_9i2b_l7EwwyQUzWPSs7SYdKR4F0nXo8",
        authDomain: "appointment-e776f.firebaseapp.com",
        projectId: "appointment-e776f",
        storageBucket: "appointment-e776f.appspot.com",
        messagingSenderId: "680279727812",
        appId: "1:680279727812:web:03692e62ff2189c658b391"}
      
    )
    
  ],
  providers: [AngularFireModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
