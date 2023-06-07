import { Component, EventEmitter, Output } from '@angular/core';
import { User, users } from '../user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Output() selectedUser: EventEmitter<User>=new EventEmitter<User>(); 

  constructor() {}

  users: User[] = users;

  onClick(user:User) {
    this.selectedUser.emit(user);
  }
}

