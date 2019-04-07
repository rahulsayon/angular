import { TestBed } from '@angular/core/testing';

import { CreateEmployeeCanDeactiveGuardService } from './create-employee-can-deactive-guard.service';

describe('CreateEmployeeCanDeactiveGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateEmployeeCanDeactiveGuardService = TestBed.get(CreateEmployeeCanDeactiveGuardService);
    expect(service).toBeTruthy();
  });
});
