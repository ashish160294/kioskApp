import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit {
  public username;
  constructor() { }

  ngOnInit() {
      this.username = 'Sameeksha'
  }

}
