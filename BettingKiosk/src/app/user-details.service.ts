import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  user = null;
  userObservable = new Subject();
  constructor() { }
  checkUserLoginStatus() {
    if (this.user && this.user.email) {
      return true;
    }
  }
  updateLoggedInUser(user) {
    this.user = user;
    this.userObservable.next(user);
  }
  LogoutUser() {
    this.user = null;
  }
  UpdateUserData() {

  }
}
