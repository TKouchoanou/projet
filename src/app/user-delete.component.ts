import { Component, Input } from '@angular/core';
import { User, users } from './user.interface';

@Component({
  selector: 'app-user-delete',
  template: `
  
   <div class="user-list">
   Delete users &nbsp;:  &nbsp;
      <a *ngFor="let user of users" (click)="deleteUser(user)">
        {{ user.name }}
      </a>
    </div>
  `,
  styles:[`
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
`]
})
export class UserDeleteComponent {
  users: User[]=users;
  constructor() {}
  deleteUser(user: User) {
    console.log('Supprission de l\'utilisateur :', user);
  }
}
