import { Component } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   editUser:User={ id: 0, name: '...', email: '...'}

   constructor() {}
   
  onSelectedUser(user:User) {
    this.editUser=user; 
    }
}
