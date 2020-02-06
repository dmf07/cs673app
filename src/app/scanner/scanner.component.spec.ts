import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ScannerComponent } from './scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

describe('ScannerComponent', () => {
  let component: ScannerComponent;
  let fixture: ComponentFixture<ScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerComponent],
      imports: [ZXingScannerModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
