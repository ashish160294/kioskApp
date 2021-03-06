import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireAction } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import * as environmentVariable from '../../environments/environment';
import * as firebase from 'firebase/app';
import { UserDetailsService } from '../user-details.service';
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseConnectionsService implements OnInit  {
  usersRef: any;
  kioskDetails: any;
  dbRef: DatabaseReference;
  racesData: any;
  constructor(private db: AngularFireDatabase, private userService: UserDetailsService, private router: Router) {
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

  getLoggedInUserDetails(userEmail) {
    const user = this.db.object(`users/${userEmail}`).valueChanges();
    user.subscribe((userData) => {
      console.log(userData);
      this.userService.updateLoggedInUser(userData);
    });
  }
  logoutUser() {
    this.userService.updateLoggedInUser(null);
    this.dbRef.child('kiosks').child(environmentVariable.environment.KioskId.toString()).child('user').set('none');
    this.dbRef.child('kiosks').child(environmentVariable.environment.KioskId.toString()).child('isloggedin').set(false).then(() => {
      this.router.navigate(['']);
    });
    // this.dbRef.child("kiosks").child()
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

  getRacesList() {
    const racesRef = this.db.list('Races').valueChanges();
    return racesRef.pipe(map((data) => {
      this.racesData = data;
      return this.racesData;
    })
  );
  }
  fetchHorses() {
    const horsesRef = this.db.list('Horses').valueChanges();
    return horsesRef.pipe(map((data) => {
      return data;
    })
  );
  }
}
