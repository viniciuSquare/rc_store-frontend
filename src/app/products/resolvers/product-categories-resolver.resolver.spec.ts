import { TestBed } from '@angular/core/testing';

import { ProductCategoriesResolver } from './product-categories.resolver';

describe('ProductCategoriesResolver', () => {
  let resolver: ProductCategoriesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductCategoriesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
