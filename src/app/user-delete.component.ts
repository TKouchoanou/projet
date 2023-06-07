import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User, users } from './user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-delete',
  template: `
    <div class="user-list">
      Delete users &nbsp;: &nbsp;
      <a *ngFor="let user of users" (click)="deleteUser(user)">
        {{ user.name }}
      </a>
    </div>
  `,
  styles: [
    `
      .user-list {
        display: flex;
        flex-wrap: wrap;
      }

      .user-list a {
        margin-right: 10px;
        cursor: pointer;
      }
      .user-list a:hover {
        background-color: lightblue;
      }
    `,
  ],
})
export class UserDeleteComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  users: User[] = users;

  constructor() {}
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  deleteUser(user: User) {
    console.log("Suppression de l'utilisateur :", user);
  }
}
