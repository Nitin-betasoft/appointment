import { Component, OnInit } from '@angular/core';
import { FireauthService } from 'src/app/services/fireauth.service';
import { DatabaseService } from 'src/app/services/database.service';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isSignedIn = false;
  updatedData: boolean = false;
  UsersData: any;
  d: any;
  f: any;
  g: any;
  h: any;
  editdata: any = {
    lastName: null,
    date: null,
    firstName: null,
    email: null,
    userId: null,
    _id: null,
  };
  doctorData: any;
  timeStops: any;
  doctorday: any;

  //  this.getDayName(this.dateStr, "en-IN");

  constructor(
    public fireauthservice: FireauthService,
    private service: DatabaseService
  ) {}
  ngOnInit() {
    if (localStorage.getItem('user') != null) this.isSignedIn = true;
    else this.isSignedIn = false;
    // this.getUsers()
    this.getusers();
  }
  // async getUsers() {
  //   this.UsersData = await this.service.getAllUsers();
  //   console.log(this.UsersData);
  //  }

  Logout() {
    console.log('here i am');
    this.fireauthservice.logOut();
  }
  delUsers(_id: any) {
    this.service.onDelete(_id);
  }
  edit(alldata: any) {
    this.updatedData = true;
    this.editdata = alldata;
    console.log(this.editdata);
  }
  update(
    id: any,
    firstname: string,
    lastname: string,
    email: string,
    date: string
  ) {
    this.service.updateUser(id, firstname, lastname, email, date);
    this.updatedData = false;
  }
  async onchange(value: string) {
    console.log('value => ', value);
    const abc = await this.service.getAllUsers(value);
    console.log('abc => ', abc);
    this.UsersData = abc;
    console.log(typeof this.UsersData);
  }
  async getusers() {
    this.doctorData = await this.service.getAllDoctors();
    console.log(this.doctorData);
  }
  getDayName(dateStr: any) {
    var date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { weekday: 'long' });
  }
  adddate(date: string) {}
  async all(date: string) {
    console.log(date);
    let day = this.getDayName(date);
    console.log(day);
    this.doctorday = await this.service.gettime(day);
    console.log(this.doctorday);
  }

  async data(date: string, name: string) {
    console.log('hello');
    let day = this.getDayName(date);
    console.log(day);
    let dataof = await this.service.getstarttime(day, name);
    console.log(dataof);
    this.timestapms(dataof[0].starttime, dataof[0].endtime);
  }
  timestapms(starttime: any, endtime: any) {
    console.log(starttime, endtime);
    this.d = starttime.split(':')[0];
    this.f = starttime.split(':')[1];
    this.g = endtime.split(':')[0];
    this.h = endtime.split(':')[1];
    var startTime = moment().utc().set({ hour: this.d, minute: this.f });
    var endTime = moment().utc().set({ hour: this.g, minute: this.h });

    this.timeStops = [];

    while (startTime <= endTime) {
      this.timeStops.push(new (moment as any)(startTime).format('HH:mm'));
      startTime.add(30, 'minutes');
    }

    console.log('timeStops ', this.timeStops);
  }
  addbooking(date:any,time:any,name:any){
   this.service.addbooking(date,time,name)
  }
}
