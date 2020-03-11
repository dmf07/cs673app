import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { HistoryItem } from 'src/app/models/history-item.model';
import { HistoryItemGrouped } from 'src/app/models/history-item-grouped.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historyItemsGrouped: HistoryItemGrouped[] = [];
  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    const historyItems = this.historyService.getHistoryItems();
    this.historyItemsGrouped = historyItems.reduce((acc, d) => {
      const dateString = new Date(d.date).toDateString();
      const group = acc.find(x => x.date.toDateString() === dateString);
      if (group) {
        group.historyItems.push(d);
      } else {
        acc.push({
          date: new Date(dateString),
          historyItems: [d]
        });
      }
      return acc;
    }, []);
  }
}
