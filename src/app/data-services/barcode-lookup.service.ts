import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarcodeLookupService {
  private uri = 'https://cors-anywhere.herokuapp.com/https://api.barcodelookup.com/';
  private apiKey = 'n0nded8ftepd72ka5uwq7fnoilzaks';

  constructor(private httpClient: HttpClient) {}

  public barcodeQuery(barcode: string) {
    return this.httpClient.get(
      `${this.uri}v2/products?barcode=${barcode}&formatted=y&key=${this.apiKey}`
    );
  }
}
