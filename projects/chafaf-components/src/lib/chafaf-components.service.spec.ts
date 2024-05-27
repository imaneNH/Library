import { TestBed } from '@angular/core/testing';

import { ChafafComponentsService } from './chafaf-components.service';

describe('ChafafComponentsService', () => {
  let service: ChafafComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChafafComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
