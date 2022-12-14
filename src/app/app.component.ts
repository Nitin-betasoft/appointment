import { Component,OnInit} from '@angular/core';
import { FireauthService } from './services/fireauth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appointment';
  isSignedIn=false
  constructor(public fireauthservice:FireauthService){}
  ngOnInit(){
    if(localStorage.getItem('user')!=null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
    
  }
  handlelogout(){
    this.isSignedIn=false
  }
}
