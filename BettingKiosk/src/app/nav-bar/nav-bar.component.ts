import { Component, OnInit } from '@angular/core';
import { FirebaseConnectionsService } from '../services/firebase-connections.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit {
  public username;
  constructor(private firebaseService: FirebaseConnectionsService, private router: Router) { }

  ngOnInit() {
      this.username = 'Sameeksha';
  }
  logoutUser() {
    this.firebaseService.logoutUser();
    // this.router.navigate(['']);

  }

}
