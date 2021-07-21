import { TestBed } from '@angular/core/testing';

import { ConnectiveServiceService } from './connective-service.service';

describe('ConnectiveServiceService', () => {
  let service: ConnectiveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectiveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
