import { TestBed } from '@angular/core/testing';

import { ServiceeventService } from './serviceevent.service';

describe('ServiceeventService', () => {
  let service: ServiceeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
