import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public socialUser: SocialUser;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.authService.authState.subscribe((socialUser) => {
      this.socialUser = socialUser;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
