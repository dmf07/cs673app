import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  success: string;
  allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX /*, ...*/
  ];
  constructor() {}

  ngOnInit() {}

  whatHappened($event, name) {
    console.log(name);
    console.log($event);
    if (name === 'scanSuccess') {
      this.success = $event;
    }
  }
}
