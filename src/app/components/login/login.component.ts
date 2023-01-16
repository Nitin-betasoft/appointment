import { Component,OnInit} from '@angular/core';
import { FireauthService } from 'src/app/services/fireauth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isSignedIn=false
  constructor(public fireauthservice:FireauthService){}
  ngOnInit(){
    if(localStorage.getItem('user')!=null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
    
  }

   async OnSignIn(email:string , password:string){
    await this.fireauthservice.signin(email,password)
   if(this.fireauthservice.isLoggedIn)
   this.isSignedIn=true
  }
  
  }