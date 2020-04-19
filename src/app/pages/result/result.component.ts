import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeLookupService } from '../../services/barcode-lookup.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { HistoryItem } from 'src/app/models/history-item.model';
import { Item } from 'src/app/models/barcode_spider/item.model';
import { HistoryItemService } from 'src/app/services/history-item.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, OnDestroy {
  barcode: string;
  item: Item;
  notFound: boolean;
  private subscription: Subscription = new Subscription();
  constructor(
    private activatedRoute: ActivatedRoute,
    private barcodeLookupService: BarcodeLookupService,
    private ngxSpinnerService: NgxSpinnerService,
    private historyItemService: HistoryItemService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.barcode = this.activatedRoute.snapshot.params.barcode;
    this.lookupBarcode();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
        (item) => this.handleResult(item),
        (error) => {
          if (error.status === 404) {
            this.notFound = true;
          }
        }
      );
  }

  private handleResult(item: Item) {
    if (item.item_response.code === 200) {
      this.item = item;
    } else {
      this.notFound = true;
    }
  }

  private saveHistory() {
    this.subscription = this.authService.authState.subscribe((socialLogin) => {
      if (socialLogin) {
        this.saveHistoryItem(socialLogin.idToken);
      }
    });
  }

  private saveHistoryItem(idToken: string) {
    const historyItem = new HistoryItem();
    historyItem.upc = this.barcode;
    historyItem.title = this.barcode;
    if (!this.notFound) {
      historyItem.title = this.item.item_attributes.title;
    }
    this.historyItemService.saveHistory(idToken, historyItem).subscribe();
  }
}
