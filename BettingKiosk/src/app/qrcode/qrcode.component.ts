import { Component } from '@angular/core';
import { FirebaseConnectionsService } from '../services/firebase-connections.service';
import { OnInit } from '@angular/core';
import * as uuid from 'uuid';
import * as environmentVariable from '../../environments/environment';

@Component({
selector: 'app-qrcode',
templateUrl: './qrcode.component.html',
styleUrls: ['./qrcode.component.css']
})

export class QRCodeComponent implements OnInit {
elementType: 'url' | 'canvas' | 'img' = 'url';
value = 'Techiediaries';
qr: boolean;
kioskRef: any;
Generate: any;
inter = null;
kioskId = environmentVariable.environment.KioskId;
constructor(private firebaseService: FirebaseConnectionsService) {

}
ngOnInit() {
    this.firebaseService.getQRCode().subscribe((data) => {
        this.qr = true;
        this.kioskRef = data;
        this.value = data.barcode.toString();
        if (!data.isloggedin && this.inter === null) {
            this.interval();
        } else if (!data.isloggedin) {
            this.qr = true;
        } else if (data.isloggedin) {
            this.qr = false;
            this.stopInter();
            console.log('user logged in');
        }
    });
}
interval() {
    this.inter = setInterval(() => {
    const value1 = uuid.v4();
    const x = value1.split('-')[0];
    this.firebaseService.updateQRCode(x, this.kioskRef);
    }, 60000);
}
stopInter() {
    clearInterval(this.inter);
    this.inter = null;
}
}
