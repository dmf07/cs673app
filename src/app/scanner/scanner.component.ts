import { Component, Output, EventEmitter, Input } from '@angular/core';
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

  allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX /*, ...*/
  ];

  hasDevices: boolean;
  hasPermission: boolean;

  @Input()
  enabled: boolean;

  @Output()
  scannerHasDevices: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  scannerHasPermission: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  onScanSuccess($event) {
    this.router.navigate(['/result', $event]);
  }

  onTorchCompatible($event) {
    this.isTorchCompatible = $event;
  }

  onHasDevices($event) {
    this.hasDevices = $event;
    this.scannerHasDevices.emit(this.hasDevices);
  }

  onPermissionResponse($event) {
    this.hasPermission = $event;
    this.scannerHasPermission.emit(this.hasPermission);
  }

  toggleLight() {
    this.torchEnabled = !this.torchEnabled;
  }
}
