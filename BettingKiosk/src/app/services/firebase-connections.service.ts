import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireAction } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import * as environmentVariable from '../../environments/environment';
import { AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseConnectionsService implements OnInit  {
  usersRef: any;
  kioskDetails: any;
  dbRef: DatabaseReference;
  constructor(private db: AngularFireDatabase) {
    firebase.initializeApp(environmentVariable.environment.firebase);
    this.dbRef = firebase.database().ref();
  }
  ngOnInit() {
    this.dbRef = firebase.database().ref();
    console.log(this.dbRef);
  }
  updateQRCode(code, kioskRefe) {
    this.dbRef.child("kiosks").child(kioskRefe.id).child("barcode").set(code);
    // const obj = this.AFC.key;
    // console.log(obj);
    // ob
  }
  getQRCode() {
    this.usersRef = this.db.list('kiosks').valueChanges();
    console.log(this.usersRef);
    return this.usersRef.pipe(map((data) => {
      console.log(data);
      // console.log(data[0].payload.doc.data());
      this.kioskDetails =  _.find(data, (dat) => {
        return dat.id === environmentVariable.environment.KioskId;
      });
      return this.kioskDetails;
    }));
  }
}
