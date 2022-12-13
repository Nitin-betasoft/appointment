import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class FireauthService {
  isLoggedIn=false
  constructor(public firebaseauth:AngularFireAuth ) { }
  signin(email:string , password:string){
this.firebaseauth.signInWithEmailAndPassword(email,password)
.then(res=>{
  this.isLoggedIn=true
  // this.storage.setItem('user',(res.user))
})
  }
  signout(email:string,password:string){
    this.firebaseauth.createUserWithEmailAndPassword(email,password)
    this.isLoggedIn=true
  }
}
