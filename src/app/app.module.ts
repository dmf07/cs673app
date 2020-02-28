import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScannerComponent } from './scanner/scanner.component';
import { HttpClientModule } from '@angular/common/http';
import { ScanResultComponent } from './scan-result/scan-result.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { HistoryComponent } from './pages/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    ScanResultComponent,
    HomeComponent,
    SearchComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ZXingScannerModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
