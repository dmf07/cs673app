import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private router: Router) {}

  upcCode = '';
  minUpcLength = 4;
  hasDevices: boolean;
  hasPermission: boolean;
  scannerEnabled: boolean;

  onEnter() {
    if (this.upcCode.length >= this.minUpcLength) {
      this.search();
    }
  }

  search() {
    this.router.navigate(['result', this.upcCode]);
  }

  onHasDevices($event) {
    console.log($event);
    this.hasDevices = $event;
  }

  onHasPermission($event) {
    console.log($event);
    this.hasPermission = $event;
  }

  enableScanner() {
    this.scannerEnabled = true;
  }
}
