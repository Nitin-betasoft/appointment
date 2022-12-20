import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private service: DatabaseService) {}

  add(firstname:string,lastname:string,email:string ,date:string,time:string){
    
    this.service.addNewUser( firstname,lastname,email,date,time);

  }

}
