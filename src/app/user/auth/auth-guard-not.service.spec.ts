import { TestBed } from '@angular/core/testing';

import { AuthGuardNotService } from './auth-guard-not.service';

describe('AuthGuardNotService', () => {
  let service: AuthGuardNotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardNotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
