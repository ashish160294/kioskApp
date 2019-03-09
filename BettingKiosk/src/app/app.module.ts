import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { AllRaceComponent } from './all-races/all-races.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardTitle, MatCard, MatCardHeader, MatCardContent} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    QRCodeComponent,
    AllRaceComponent,
    MatCardTitle,
    MatCard,
    MatCardHeader,
    MatCardContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'ghode-44b33'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NgxQRCodeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
