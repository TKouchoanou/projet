import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { User, users } from '../user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();

  @Output() selectedUser: EventEmitter<User> = new EventEmitter<User>();

  users: User[] = users;

  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClick(user: User) {
    this.selectedUser.emit(user);
  }
}
