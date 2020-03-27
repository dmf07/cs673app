import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider,
  SocialUser
} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLogin: boolean;
  socialUser: SocialUser;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe(socialUser => {
      this.socialUser = socialUser;
      this.showLogin = !socialUser;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut(true);
  }
}
