import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { AllRaceComponent } from './all-races/all-races.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { MyBetsComponent } from './my-bets/my-bets.components';

const routes: Routes = [
  { path: 'qrcode', component: QRCodeComponent },
  { path: '', redirectTo: 'qrcode', pathMatch: 'full'},
  { path: 'nav', component: NavbarComponent, children: 
    [
      {path: '', redirectTo: 'nav/dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: AllRaceComponent},
      {path: 'mybets', component: MyBetsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
