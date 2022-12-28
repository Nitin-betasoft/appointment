import { Component,OnInit } from '@angular/core';
import { FireauthService } from 'src/app/services/fireauth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private fireauthservice:FireauthService, private service: DatabaseService, private router:Router){}
isSignedIn=false
selectedRole=''

ngOnInit(){
  if(localStorage.getItem('user')!=null)
  this.isSignedIn=true
  else
  this.isSignedIn=false
  
}

async  OnSignUp(fName:string , lName:string,email:string , password:string,value:string){
  await this.add(fName,lName,email,value);
  await  this.fireauthservice.signup(email,password)
  if(value == "Doctor"){
      this.router.navigate(['/doctordashboard'])
    }
    else{
      this.router.navigate(['/dashboard'])
    }

  if(this.fireauthservice.isLoggedIn)
  this.isSignedIn=true
}
async add(firstname:string,lastname:string,email:string ,value:string){
  await this.service.addNewUser( firstname,lastname,email,value);
}

onSelected(value:string){
  this.selectedRole  =  value
  console.log("value" ,value)
}
}
