import { TestBed } from '@angular/core/testing';

import { UniqueUserValidatorService } from './unique-user-validator.service';

describe('UniqueUserValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueUserValidatorService = TestBed.get(UniqueUserValidatorService);
    expect(service).toBeTruthy();
  });
});
