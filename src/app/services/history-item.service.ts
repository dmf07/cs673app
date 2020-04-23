import { Injectable } from '@angular/core';
import { HistoryItem } from '../models/history-item.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HistoryItemService {
  constructor(private httpClient: HttpClient) {}

  public getHistory(idToken: string): Observable<HistoryItem[]> {
    return this.httpClient.get<HistoryItem[]>(
      `${environment.historyApi}history`,
      { headers: this.buildHeaders(idToken) }
    );
  }

  public saveHistory(idToken: string, historyItem: HistoryItem) {
    return this.httpClient.post(
      `${environment.historyApi}history`,
      historyItem,
      { headers: this.buildHeaders(idToken) }
    );
  }

  public deleteHistoryItem(idToken: string, id: string) {
    return this.httpClient.delete(
      `${environment.historyApi}history/${id}`,
      { headers: this.buildHeaders(idToken) }
    );
  }

  private buildHeaders(idToken: string) {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    });
  }
}
