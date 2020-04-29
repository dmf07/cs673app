import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Item } from '../models/barcode_spider/item.model';
import { Observable } from 'rxjs';
import { Recommendation } from '../models/recommendation.model';

@Injectable({
  providedIn: 'root',
})
export class BarcodeLookupService {
  constructor(private httpClient: HttpClient) {}

  public barcodeQuery(upc: string): Observable<Item> {
    return this.httpClient.get<Item>(`${environment.baseApi}upc/${upc}`);
  }

  public barcodeRecommendations(upc: string): Observable<Recommendation[]> {
    return this.httpClient.get<Recommendation[]>(
      `${environment.baseApi}upc/${upc}/recommendations`
    );
  }
}
