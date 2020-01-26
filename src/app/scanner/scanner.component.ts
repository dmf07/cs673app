import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  enabled = false;
  constructor() {}

  ngOnInit() {}

  hasDevices($event) {
    // TODO
  }

  torchCompatible($event) {
    // TODO
  }

  enableDisable() {
    this.enabled = !this.enabled;
  }
}
