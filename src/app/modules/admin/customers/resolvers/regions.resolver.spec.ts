import { TestBed } from '@angular/core/testing';

import { RegionsResolver } from './regions.resolver';

describe('RegionsResolver', () => {
  let resolver: RegionsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RegionsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
