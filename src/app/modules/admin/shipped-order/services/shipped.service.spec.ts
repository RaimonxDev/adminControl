import { TestBed } from '@angular/core/testing';

import { ShippedService } from './shipped.service';

describe('ShippedService', () => {
  let service: ShippedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
