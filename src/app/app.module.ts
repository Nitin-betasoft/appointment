import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { ToastrModule } from 'ngx-toastr';
import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    AddComponent,
    DoctordashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    NgxMatTimepickerModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    BrowserAnimationsModule,

  ],
  providers: [AngularFireModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
