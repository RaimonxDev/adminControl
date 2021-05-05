import { TestBed } from '@angular/core/testing';

import { CountProductsResolver } from './count-products.resolver';

describe('CountProductsResolver', () => {
  let resolver: CountProductsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CountProductsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
