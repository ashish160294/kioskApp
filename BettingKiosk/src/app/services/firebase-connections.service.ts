import { Injectable, OnInit } from '@angular/core';
import * as db from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseConnectionsService implements OnInit  {

  constructor(private db1: AngularFireDatabase) { }
  ngOnInit() {
    db.database();

  }
}
