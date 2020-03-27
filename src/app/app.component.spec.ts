import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthService } from 'angularx-social-login';
import { GoogleSvgComponent } from './google-svg/google-svg.component';

const mockAuthService = {} as AuthService;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, NgxSpinnerModule],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService
        }
      ],
      declarations: [AppComponent, GoogleSvgComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
