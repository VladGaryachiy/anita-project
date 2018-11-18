import { TestBed, inject } from '@angular/core/testing';

import { ProductsFiltersService } from './products-filters.service';

describe('ProductsFiltersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsFiltersService]
    });
  });

  it('should be created', inject([ProductsFiltersService], (service: ProductsFiltersService) => {
    expect(service).toBeTruthy();
  }));
});
