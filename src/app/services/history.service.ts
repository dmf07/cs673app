import { Injectable } from '@angular/core';
import { HistoryItem } from '../models/history-item.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private HISTORY_ITEMS = 'HISTORY_ITEMS';
  constructor() {}

  saveHistoryItem(historyItem: HistoryItem) {
    const historyItemsString = localStorage.getItem(this.HISTORY_ITEMS);
    const historyItems = !!historyItemsString
      ? (JSON.parse(historyItemsString) as HistoryItem[])
      : ([] as HistoryItem[]);

    const upcIndex = historyItems.findIndex(x => x.upc === historyItem.upc);
    if (upcIndex !== -1) {
      historyItems.splice(upcIndex, 1);
    }
    historyItems.push(historyItem);
    localStorage.setItem(this.HISTORY_ITEMS, JSON.stringify(historyItems));
  }
}
