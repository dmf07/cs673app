import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BarcodeLookupService } from '../data-services/barcode-lookup.service';

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.component.html',
  styleUrls: ['./scan-result.component.scss']
})
export class ScanResultComponent implements OnInit {
  public barcode: string;
  public result: any;
  private useSampleData: boolean;
  private sample = {
    products: [
      {
        barcode_number: '0190576273707',
        barcode_type: 'EAN',
        barcode_formats: 'UPC 190576273707, EAN 0190576273707',
        mpn: '80ue002sus',
        model: '80ue002sus',
        asin: 'B01H4VOGPM',
        product_name:
          '2016 Lenovo Yoga 900 13 - 13.3" QHD Touch - i7-6560U (up to 3.2Ghz) - Intel Iris 540 graphics - 8GB Ram - 256GB SSD - Silver - Windows 10 Home',
        title: '',
        category: 'Electronics > Computers > Laptops',
        manufacturer: 'Lenovo',
        brand: '',
        label: '',
        author: '',
        publisher: 'Lenovo',
        artist: '',
        actor: '',
        director: '',
        studio: '',
        genre: '',
        audience_rating: '',
        ingredients: '',
        nutrition_facts: '',
        color: '',
        format: '',
        package_quantity: '',
        size: '',
        length: '',
        width: '',
        height: '',
        weight: '',
        release_date: '',
        description:
          '2016 Lenovo Yoga 900 13 - 13.3" QHD Touch - i7-6560U (up to 3.2Ghz) - Intel Iris 540 graphics - 8GB Ram - 256GB SSD - Silver - Windows 10 Home',
        features: ['i7-6560U (up to 3.2Ghz) - Intel Iris 540 graphics'],
        images: ['https://images.barcodelookup.com/112/1122376-1.jpg'],
        stores: [
          {
            store_name: 'BLINQ',
            store_price: '597.29',
            product_url:
              'https://www.blinq.com/detail/electronics/laptops-tablets/pc-laptops-netbooks/lenovo-yoga-900-2-in-1-13-3-laptop-i7-8gb-256gb-ssd-win-10-80ue002sus/1316999',
            currency_code: 'USD',
            currency_symbol: '$'
          },
          {
            store_name: 'Rakuten.com',
            store_price: '919.99',
            product_url:
              'https://www.rakuten.com/shop/smart-supply/product/80UE002SUSWOB/?scid=af_feed',
            currency_code: 'USD',
            currency_symbol: '$'
          }
        ],
        reviews: []
      }
    ]
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private barcodeLookupService: BarcodeLookupService
  ) {}

  ngOnInit() {
    this.barcode = this.activatedRoute.snapshot.params.barcode;
    this.useSampleData = !!this.activatedRoute.snapshot.queryParams.sample;
    this.lookupBarcode();
  }

  lookupBarcode() {
    if (!this.barcode) {
      return;
    }
    if (this.useSampleData) {
      this.result = this.sample;
      return;
    }
    this.barcodeLookupService
      .barcodeQuery(this.barcode)
      .subscribe(x => (this.result = x));
  }
}
