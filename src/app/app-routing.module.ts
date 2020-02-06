import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScannerComponent } from './scanner/scanner.component';
import { ScanResultComponent } from './scan-result/scan-result.component';

const routes: Routes = [
  {
    path: '',
    component: ScannerComponent
  },
  {
    path: 'result/:barcode',
    component: ScanResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
