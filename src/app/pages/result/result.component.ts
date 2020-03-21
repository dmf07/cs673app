import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeLookupService } from '../../services/barcode-lookup.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { HistoryService } from 'src/app/services/history.service';
import { HistoryItem } from 'src/app/models/history-item.model';
import { Item } from 'src/app/models/barcode_spider/item.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  barcode: string;
  item: Item;
  notFound: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private barcodeLookupService: BarcodeLookupService,
    private ngxSpinnerService: NgxSpinnerService,
    private historyService: HistoryService
  ) {}

  ngOnInit() {
    this.barcode = this.activatedRoute.snapshot.params.barcode;
    this.lookupBarcode();
  }

  lookupBarcode() {
    if (!this.barcode) {
      return;
    }
    this.ngxSpinnerService.show();
    this.barcodeLookupService
      .barcodeQuery(this.barcode)
      .pipe(
        finalize(() => {
          this.saveHistory();
          this.ngxSpinnerService.hide();
        })
      )
      .subscribe(
        item => this.handleResult(item),
        error => {
          if (error.status === 404) {
            this.notFound = true;
          }
        }
      );
  }

  private handleResult(item: Item) {
    console.log(item);
    if (item.item_response.code === 400) {
      this.notFound = true;
    } else {
      this.item = item;
    }
  }

  private saveHistory() {
    const historyItem = new HistoryItem();
    historyItem.upc = this.barcode;
    historyItem.title = this.barcode;
    if (!this.notFound) {
      historyItem.title = this.item.item_attributes.title;
    }
    this.historyService.saveHistoryItem(historyItem);
  }
}
