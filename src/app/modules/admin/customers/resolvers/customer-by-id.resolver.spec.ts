import { TestBed } from '@angular/core/testing';

import { CustomerByIdResolver } from './customer-by-id.resolver';

describe('CustomerByIdResolver', () => {
  let resolver: CustomerByIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CustomerByIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
