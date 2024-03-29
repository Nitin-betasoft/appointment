import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(
    private db: AngularFirestore,
    public router: Router,
    private toastr: ToastrService
  ) {}

  // async addNewUser( _fName:string, _lName:string, _email:string) {
  //         let userdata:any=localStorage.getItem('user')
  //         let userData = JSON.parse(userdata)
  //         let datedata = await this.getUsersData(_date)
  //         console.log("here i am =>", datedata);
  //         if(datedata.length){
  //           console.log("data exists",datedata)
  //           this.toastr.error('NO BOOKINGS FOR THIS DATE AVAILABLE', 'Date Issues', {
  //             timeOut: 3000,
  //           });
  //           return "data already exist"
  //         }
  //         else{
  //           console.log("not exists")
  //           let gid=this.generateid(8)
  //           console.log("gid =>", gid)
  //           return this.db.collection("users").doc(gid).set({firstName:_fName,lastName:_lName,email:_email,date:_date, userId: userData.uid,_id:gid,time:_time}),this.router.navigate(['/dashboard']);

  //         }

  //     }
  async addNewUser(
    _fName: string,
    _lName: string,
    _email: string,
    _value: string
  ) {
    let gid = this.generateid(8);
    this.db
      .collection('users')
      .doc(gid)
      .set({
        firstName: _fName,
        lastName: _lName,
        email: _email,
        _id: gid,
        role: _value,
      });
    console.log('hello');
  }

  adduser(date:string){this.db.collection('users').doc().set({date:date})

  }

  // async getUsersData(date:any) {
  //       return new Promise<any>((resolve)=> {
  //         if(date){
  //           console.log("got date");
  //           this.db.collection('users', ref => ref.where('date', '==', date)).valueChanges().subscribe(users => resolve(users))
  //         }
  //         else {
  //           console.log("date null");
  //           let userdata:any=localStorage.getItem('user')
  //           let userData = JSON.parse(userdata)

  //         this.db.collection('users', ref => ref.where('userId', '==', userData._id)).valueChanges().subscribe(users => resolve(users))
  //         }

  //       })
  //     }

  async getAllUsers(value: string) {
    return new Promise<any>((resolve) => {
      this.db
        .collection('doctor', (ref) => ref.where('userId', '==', value))
        .valueChanges()
        .subscribe((users) => resolve(users));
    });
  }

  onDelete(id: any) {
    // let userdata:any=localStorage.getItem('user')
    // let userData = JSON.parse(userdata)

    this.db.collection('users').doc(id).delete();
  }
  generateid(length: any) {
    let randomString = '';
    randomString += Math.random().toString(20).substr(2, length);

    if (randomString.length > length) return randomString.slice(0, length);

    return randomString;
  }
  updateUser(
    id: any,
    _firstName: string,
    _lastName: string,
    _email: string,
    _date: string
  ) {
    this.db
      .doc(`users/${id}`)
      .update({
        firstName: _firstName,
        lastName: _lastName,
        email: _email,
        date: _date,
      });
  }
  async getAllDoctors(){
   
      return new Promise<any>((resolve)=> {
      this.db.collection('doctor').valueChanges().subscribe(doctors => resolve(doctors));
      })
      }
 async gettime(day :string){
  return new Promise<any>((resolve) => {
    this.db
      .collection('doctor', (ref) => ref.where('day', '==', day))
      .valueChanges()
      .subscribe((users) => resolve(users));
  });
      }
      async getstarttime(day :string,name:string){
        console.log(day,  name)
        return new Promise<any>((resolve) => {
           this.db
             .collection('doctor', (ref) => ref.where('day', '==', day).where('name', '==', name))
             .valueChanges()
             .subscribe((users) => resolve(users));
         });
            }

 async addbooking( date:string, time:string, name:string) {
          let userdata:any=localStorage.getItem('user')
          let userData = JSON.parse(userdata)
          let datedata = await this.getUsersData(date,time,name)
          console.log("here i am =>", datedata);
          if(datedata.length){
            console.log("data exists",datedata)
            this.toastr.error('PLEASE CHOOSE ANOTHER TIME', 'Time not available', {
              timeOut: 3000,
            });
            return "data already exist"
          }
          
          else{
            console.log("not exists")
            let gid=this.generateid(8)
            console.log("gid =>", gid)
            return this.db.collection("bookings").doc(gid).set({date:date,time:time,name:name, userId: userData.uid,_id:gid}),this.router.navigate(['/dashboard']);

          }

      }

       async getUsersData(date:any,time:any,name:any) {
        return new Promise<any>((resolve)=> {
          if(time){
            console.log("got date");
            this.db.collection('bookings', ref => ref.where('date', '==', date).where('time','==',time).where('name','==',name)).valueChanges().subscribe((users:any) => resolve(users))
          }
          else {
            console.log("date null");
            let userdata:any=localStorage.getItem('user')
            let userData = JSON.parse(userdata)

          this.db.collection('bookings', ref => ref.where('userId', '==', userData._id)).valueChanges().subscribe(users => resolve(users))
          }

        })
      }

            
  }

