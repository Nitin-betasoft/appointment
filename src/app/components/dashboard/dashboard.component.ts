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
  doctorData:any
  
  doctorday:any
   
 
//  this.getDayName(this.dateStr, "en-IN");


 
  constructor(public fireauthservice:FireauthService ,private service:DatabaseService){}
  ngOnInit(){
    if(localStorage.getItem('user')!=null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
    // this.getUsers()
    this.getusers()
   
  
    
  }
  // async getUsers() {
  //   this.UsersData = await this.service.getAllUsers();
  //   console.log(this.UsersData);
  //  }

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
  async onchange(value:string){
    console.log("value => ", value)
    const abc = await this.service.getAllUsers(value)
    console.log("abc => ", abc)
    this.UsersData=abc
    console.log(typeof this.UsersData)
  }
  async getusers(){
    this.doctorData = await this.service.getAllDoctors();
   console.log(this.doctorData)
  }
getDayName(dateStr:any)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { weekday: 'long' });        
}
adddate(date:string){
  

}
 async all(date:string){
  console.log(date)
   let day = this.getDayName(date)
   console.log(day)
 this.doctorday = await this.service.gettime(day)
 console.log(this.doctorday);
 
}



 
}
