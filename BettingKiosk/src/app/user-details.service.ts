import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  user = null;
  constructor() { }
  checkUserLoginStatus() {
    if (this.user && this.user.email) {
      return true;
    }
  }
  updateLoggedInUser(user) {
    this.user = user;
  }
  LogoutUser() {
    this.user = null;
  }
}
