import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BarcodeLookupService {
  constructor(private httpClient: HttpClient) {}

  public barcodeQuery(upc: string) {
    return this.httpClient.get(`${environment.baseApi}upc/${upc}`);
  }
}
