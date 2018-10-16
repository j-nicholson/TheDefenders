import { TestBed } from '@angular/core/testing';

import { MarvelDataService } from './marvel-data.service';

describe('MarvelDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarvelDataService = TestBed.get(MarvelDataService);
    expect(service).toBeTruthy();
  });
});
