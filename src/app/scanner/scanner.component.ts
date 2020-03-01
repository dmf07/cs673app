import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {
  isTorchCompatible: boolean;
  torchEnabled: boolean;
  barcode: string;
  success: any;
  hasDevices: boolean;
  hasPermission: boolean;
  allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX /*, ...*/
  ];
  constructor(private router: Router) {}

  onScanSuccess($event) {
    this.router.navigate(['/result', $event]);
  }

  onTorchCompatible($event) {
    this.isTorchCompatible = $event;
  }

  onHasDevices($event) {
    this.hasDevices = $event;
  }

  onPermissionResponse($event) {
    this.hasPermission = $event;
  }
  toggleLight() {
    this.torchEnabled = !this.torchEnabled;
  }
}
