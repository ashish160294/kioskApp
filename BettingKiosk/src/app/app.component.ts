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
  userRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too
  items: any;
  constructor(private db: AngularFireDatabase) {
  }
  ngOnInit() {
    this.usersRef = this.db.list('kiosks').valueChanges();
    console.log(this.items);

    console.log(this.usersRef);
    this.usersRef.subscribe((da) => {
      console.log(da);
    });
  }

}
