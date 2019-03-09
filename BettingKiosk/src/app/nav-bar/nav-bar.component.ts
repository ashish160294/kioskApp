import { Component, OnInit } from '@angular/core';
import { FirebaseConnectionsService } from '../services/firebase-connections.service';
import {UserDetailsService} from '../user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit {
  public username;
  constructor(private firebaseService: FirebaseConnectionsService, private router: Router, private userService: UserDetailsService) { }

  ngOnInit() {
    console.log(this.userService.user);
      this.username = 'Sameeksha';
  }
  logoutUser() {
    this.firebaseService.logoutUser();
    // this.router.navigate(['']);

  }

}
