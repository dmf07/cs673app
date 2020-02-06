import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { BarcodeLookupService } from '../data-services/barcode-lookup.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  isTorchCompatible: boolean;
  torchEnabled: boolean;
  success: any;
  allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX /*, ...*/
  ];
  constructor(private barcodeLookupService: BarcodeLookupService) {}

  ngOnInit() {}

  onScanSuccess($event) {
    this.barcodeLookupService
      .barcodeQuery($event)
      .subscribe(x => (this.success = x));
  }

  onTorchCompatible($event) {
    this.isTorchCompatible = $event;
  }
  toggleLight() {
    this.torchEnabled = !this.torchEnabled;
  }
}
