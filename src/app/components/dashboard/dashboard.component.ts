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
  updatedData:boolean=false;
  UsersData:any
  editdata:any = {
    "lastName": null,
    "date": null,
    "firstName": null,
    "email": null,
    "userId": null,
    "_id": null
  }

 
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
  delUsers(_id:any){
    this.service.onDelete(_id);
   
  }
  edit(alldata:any){
    this.updatedData=true;
    this.editdata = alldata;
    console.log(this.editdata)
  }
  update( id:any ,firstname:string,lastname:string,email:string ,date:string){

    this.service.updateUser(id ,firstname,lastname,email,date);
    this.updatedData=false
  }
  

 
}
