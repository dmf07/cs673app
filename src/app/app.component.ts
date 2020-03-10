import { Component } from '@angular/core';
import { UuidService } from './services/uuid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private uuidService: UuidService) {
    console.log(uuidService.getUUID());
  }
}
