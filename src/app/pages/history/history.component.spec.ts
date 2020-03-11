import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { HistoryService } from 'src/app/services/history.service';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatListModule } from '@angular/material';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryComponent],
      providers: [HistoryService],
      imports: [RouterModule, MatIconModule, MatListModule]
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
