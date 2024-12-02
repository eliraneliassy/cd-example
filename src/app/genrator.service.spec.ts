import { TestBed } from '@angular/core/testing';

import { GenratorService } from './genrator.service';

describe('GenratorService', () => {
  let service: GenratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
