import { Component } from '@angular/core';

@Component({
selector: 'app-qrcode',
templateUrl: './qrcode.component.html',
styleUrls: ['./qrcode.component.css']
})

export class QRCodeComponent {
elementType : 'url' | 'canvas' | 'img' = 'url';
value : string = 'Techiediaries';
}
