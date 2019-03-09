import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  usersRef: any;      // Reference to users list, Its an Observable
  constructor(private db: AngularFireDatabase) {
  }
  ngOnInit() {
  }

}
