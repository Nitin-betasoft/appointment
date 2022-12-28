import { Component } from '@angular/core';
import { DoctordatabaseService } from 'src/app/services/doctordatabase.service';
import { FireauthService } from 'src/app/services/fireauth.service';
@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css'],
})
export class DoctordashboardComponent {
  constructor(private service: DoctordatabaseService , private fireauthservice:FireauthService) {}
  date = ''
  starttime=''
  endtime=''


  onSelected(day: string) {
    this.date = day;
    console.log("hello");
    console.log(day)
    
  }
  select(starttime:string){
    this.starttime= starttime;
  }
  selected(endtime:string){
    this.endtime=endtime;

  }

  save(name: string, speciality: string, day: string ,starttime:string,endtime:string) {
    this.service.doctordata(name, speciality, day,starttime,endtime);
    
  }
  Logout(){
    console.log("here i am")
    this.fireauthservice.logOut()
}

}

