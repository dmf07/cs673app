import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UuidService {
  private UUID = 'UUID';
  constructor() {}

  getUUID() {
    let uuid = this.getUUIDFromStorage();
    if (!uuid) {
      localStorage.setItem(this.UUID, uuidv4());
      uuid = this.getUUIDFromStorage();
    }
    return uuid;
  }

  private getUUIDFromStorage() {
    return localStorage.getItem(this.UUID);
  }
}
