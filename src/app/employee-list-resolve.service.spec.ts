import { TestBed } from '@angular/core/testing';

import { EmployeeListResolveService } from './employee-list-resolve.service';

describe('EmployeeListResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeListResolveService = TestBed.get(EmployeeListResolveService);
    expect(service).toBeTruthy();
  });
});
