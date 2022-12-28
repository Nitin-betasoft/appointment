import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoctordatabaseService {

  constructor(private db:AngularFirestore) { }

  doctordata(name:string,speciality:string,day:string,starttime:string,endtime:string){
    let userdata:any=localStorage.getItem('user')
    console.log(userdata);
    let userData = JSON.parse(userdata)
    

    this.db.collection('doctor').doc().set({name:name,speciality:speciality ,day:day,starttime:starttime,endtime:endtime , userId: userData.uid});
    
  }



} 
