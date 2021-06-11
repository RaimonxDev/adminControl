import { TestBed } from '@angular/core/testing';

import { MarcasResolver } from './marcas.resolver';

describe('MarcasResolver', () => {
  let resolver: MarcasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MarcasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
