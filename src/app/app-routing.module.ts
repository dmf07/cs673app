import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanResultComponent } from './scan-result/scan-result.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'scan',
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
