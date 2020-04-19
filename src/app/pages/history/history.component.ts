import { Component, OnInit, OnDestroy } from '@angular/core';
import { HistoryItemGrouped } from 'src/app/models/history-item-grouped.model';
import { HistoryItemService } from 'src/app/services/history-item.service';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit, OnDestroy {
  historyItemsGrouped: HistoryItemGrouped[] = [];
  loggedIn = false;
  socialUser: SocialUser;
  private subscription: Subscription;
  constructor(
    private historyItemService: HistoryItemService,
    private authService: AuthService,
    private ngxSpinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.subscription = this.authService.authState.subscribe((socialUser) => {
      this.socialUser = socialUser;
      if (socialUser) {
        this.getHistory(socialUser.idToken);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getHistory(idToken: string) {
    this.ngxSpinnerService.show();
    this.historyItemService
      .getHistory(idToken)
      .pipe(finalize(() => this.ngxSpinnerService.hide()))
      .subscribe((historyItems) => {
        this.historyItemsGrouped = historyItems.reduce((acc, d) => {
          const dateString = new Date(d.date).toDateString();
          const group = acc.find((x) => x.date.toDateString() === dateString);
          if (group) {
            group.historyItems.push(d);
          } else {
            acc.push({
              date: new Date(dateString),
              historyItems: [d],
            });
          }
          return acc;
        }, []);
      });
  }
}
