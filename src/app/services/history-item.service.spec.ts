import { TestBed } from '@angular/core/testing';

import { HistoryItemService } from './history-item.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HistoryItemService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const service: HistoryItemService = TestBed.get(HistoryItemService);
    expect(service).toBeTruthy();
  });
});
