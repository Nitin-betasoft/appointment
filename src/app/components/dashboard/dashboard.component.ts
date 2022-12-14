import { Component,OnInit, } from '@angular/core';
import { FireauthService } from 'src/app/services/fireauth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
 
  isSignedIn=false
  constructor(public fireauthservice:FireauthService){}
  ngOnInit(){
    if(localStorage.getItem('user')!=null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
    
  }
  Logout(){
    console.log("here i am")
    this.fireauthservice.logOut()
    
  }
 
}
