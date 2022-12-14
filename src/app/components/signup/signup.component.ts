import { Component,OnInit } from '@angular/core';
import { FireauthService } from 'src/app/services/fireauth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private fireauthservice:FireauthService){}
isSignedIn=false
ngOnInit(){
  if(localStorage.getItem('user')!=null)
  this.isSignedIn=true
  else
  this.isSignedIn=false
  
}

async  OnSignUp(email:string , password:string){
 await  this.fireauthservice.signup(email,password)
 if(this.fireauthservice.isLoggedIn)
 this.isSignedIn=false

}
}
