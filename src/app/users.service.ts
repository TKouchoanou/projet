import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User, users } from './user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(users);
  constructor() {}

  addUser(user: Omit<User, 'id'>): User {
    const id = this.generateUniqueId();
    const newUser = { id, ...user };
    console.log('new user' + newUser);
    this.users$.next([...this.users$.value, newUser]);
    return newUser;
  }

  editUser(editedUser: User): void {
    this.users$.next([
      ...this.users$.value.map((user) =>
        user.id == editedUser.id ? editedUser : user
      ),
    ]);
  }

  deleteUser(deletedUser: User): void {
    this.users$.next(
      this.users$.value.filter((user) => user.id != deletedUser.id)
    );
  }

  getAllUser(): User[] {
    return this.users$.value;
  }

  getAllUserObservable(): Observable<User[]> {
    return this.users$;
  }

  private generateUniqueId(): number {
    const users = this.users$.value;
    const maxId =
      users.length > 0 ? Math.max(...users.map((user) => user.id)) : 0;
    return maxId + 1;
  }
}
