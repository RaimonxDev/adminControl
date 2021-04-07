import { TestBed } from '@angular/core/testing';

import { SeeOrderResolver } from './see-order.resolver';

describe('SeeOrderResolver', () => {
  let resolver: SeeOrderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SeeOrderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
