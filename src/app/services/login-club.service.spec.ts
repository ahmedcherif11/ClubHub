import { TestBed } from '@angular/core/testing';

import { LoginClubService } from './login-club.service';

describe('LoginClubService', () => {
  let service: LoginClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
