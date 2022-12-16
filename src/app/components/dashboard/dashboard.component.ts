import { Component,OnInit, } from '@angular/core';
import { FireauthService } from 'src/app/services/fireauth.service';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isSignedIn=false
  name:any
  appointments:any
  UsersData:any
  constructor(public fireauthservice:FireauthService ,private service:DatabaseService){}
  ngOnInit(){
    if(localStorage.getItem('user')!=null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
    this.getUsers()
    
  }
  async getUsers() {
    this.UsersData = await this.service.getUsersData(null);
    console.log(this.UsersData);
   }

  Logout(){
    console.log("here i am")
    this.fireauthservice.logOut()
    
  }
  delUsers(id:any){
    this.service.onDelete(id)
  }

 
}
