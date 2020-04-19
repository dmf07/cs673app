import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatListModule } from '@angular/material';
import { HistoryItemService } from 'src/app/services/history-item.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'angularx-social-login';
import { of } from 'rxjs';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryComponent],
      providers: [
        HistoryItemService,
        {
          provide: AuthService,
          useValue: {
            authState: of(null)
          },
        },
      ],
      imports: [
        RouterModule,
        MatIconModule,
        MatListModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
