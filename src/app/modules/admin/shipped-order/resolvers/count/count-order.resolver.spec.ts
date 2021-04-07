import { TestBed } from '@angular/core/testing';

import { CountOrderResolver } from './count-order.resolver';

describe('CountOrderResolver', () => {
  let resolver: CountOrderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CountOrderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
