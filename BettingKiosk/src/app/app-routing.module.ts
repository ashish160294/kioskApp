import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { AllRaceComponent } from './all-races/all-races.component';

const routes: Routes = [
  { path: 'qrcode', component: QRCodeComponent },
  { path: '', redirectTo: '/qrcode', pathMatch: 'full'},
  { path: 'dashboard', component: AllRaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
