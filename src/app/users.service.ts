import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User, users } from './user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(users);
  constructor() {}

  addUser(user: Omit<User, 'id'>): User {
    const newUser = { id: 1, ...user };
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
}
