import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FireauthService {
  isLoggedIn=false
  constructor(public firebaseauth:AngularFireAuth ,  private router:Router) { }
  
  signin(email:string , password:string){
this.firebaseauth.signInWithEmailAndPassword(email,password)
.then(res=>{
  this.isLoggedIn=true
  this.router.navigate(['/dashboard'])
   localStorage.setItem('user',JSON.stringify(res.user))
  // this.storage.setItem('user',(res.user))
})
  }
  signup(email:string,password:string){
    this.firebaseauth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true
      this.router.navigate(['/dashboard'])
      localStorage.setItem('user',JSON.stringify(res.user)) 
      console.log(res)
    })
  }
  logOut(){
    console.log("here in logout")
    this.firebaseauth.signOut()
    console.log("here in logout usydisuftus")
    localStorage.removeItem('user')
    this.router.navigate(['login'])
    console.log("here in logouthfkjhdkjfhkdj")

  }
}
