import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { AllRaceComponent } from './all-races/all-races.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { MyBetsComponent } from './my-bets/my-bets.components';
import { MyBetsService } from './services/bets.service';
import { TopThreeHorsesComponent } from './all-races/top-three/top-three.component';
import { RaceHorseDataComponent} from './race-horse-data/race-horse-data.component';
import { RaceHorseListComponent} from './race-horse-list/race-horse-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule, MatCheckboxModule, MatCardTitle, MatCard, MatCardHeader, MatCardContent, MatToolbar, MatToolbarRow,
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    QRCodeComponent,
    AllRaceComponent,
    MatCardTitle,
    MatCard,
    MatCardHeader,
    MatCardContent,
    NavbarComponent,
    MatToolbar,
    MatToolbarRow,
    MyBetsComponent,
    TopThreeHorsesComponent,
    RaceHorseListComponent,
    RaceHorseDataComponent
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
    MatCheckboxModule,
    FlexLayoutModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [MyBetsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
