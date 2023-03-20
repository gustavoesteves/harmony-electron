import { TestBed } from '@angular/core/testing';

import { TonalService } from './tonal.service';

describe('TonalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TonalService = TestBed.get(TonalService);
    expect(service).toBeTruthy();
  });
});
