import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ActivatedRoute,
  RouterModule,
  convertToParamMap,
} from '@angular/router';

import { ResultComponent } from './result.component';
import { AuthService } from 'angularx-social-login';
import { MatCardModule } from '@angular/material';
import { of } from 'rxjs';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatCardModule, RouterModule],
      declarations: [ResultComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ barcode: 1 })) },
        },
        {
          provide: AuthService,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
