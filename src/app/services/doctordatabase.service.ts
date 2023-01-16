import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoctordatabaseService {

  constructor(private db:AngularFirestore) { }

  doctordata(name:string,speciality:string,day:string,starttime:string,time:string){
    let userdata:any=localStorage.getItem('user')
    
    let userData = JSON.parse(userdata)
    

    this.db.collection('doctor').doc().set({name:name,speciality:speciality ,day:day,starttime:starttime,endtime:time , userId: userData.uid});
    
  }
  async getdoctortime(id :string){
    let userdata:any=localStorage.getItem('user')
            let userData = JSON.parse(userdata)
    return new Promise<any>((resolve) => {
      this.db
        .collection('doctor', (ref) => ref.where('id', '==', userdata.uid))
        .valueChanges()
        .subscribe((users) => resolve(users));
    });
        }



} 
