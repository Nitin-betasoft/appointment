import { TestBed } from '@angular/core/testing';

import { DoctordatabaseService } from './doctordatabase.service';

describe('DoctordatabaseService', () => {
  let service: DoctordatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctordatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
