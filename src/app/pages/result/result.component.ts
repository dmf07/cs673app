import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeLookupService } from '../../data-services/barcode-lookup.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  barcode: string;
  result: any;
  notFound: boolean;
  private useSampleData: boolean;

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
      this.barcode = '0012345678905';
    }
    this.barcodeLookupService.barcodeQuery(this.barcode).subscribe(
      x => (this.result = x),
      error => {
        if (error.status === 404) {
          this.notFound = true;
        }
      }
    );
  }
}
