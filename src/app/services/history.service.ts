import { Injectable } from '@angular/core';
import { HistoryItem } from '../models/history-item.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private HISTORY_ITEMS = 'HISTORY_ITEMS';
  constructor() {}

  saveHistoryItem(historyItem: HistoryItem) {
    const historyItems = this.getHistoryItems();
    historyItems.push(historyItem);
    localStorage.setItem(this.HISTORY_ITEMS, JSON.stringify(historyItems));
  }

  getHistoryItems() {
    const historyItemsString = localStorage.getItem(this.HISTORY_ITEMS);
    const historyItems = !!historyItemsString
      ? JSON.parse(historyItemsString).map(x => {
          return {
            upc: x.upc,
            title: x.title,
            date: new Date(x.date)
          };
        })
      : ([] as HistoryItem[]);
    return historyItems.sort((a, b) => b.date - a.date);
  }
}
