import { TestBed } from '@angular/core/testing';

import { AuthadminService  } from './services.service';

describe('ServicesService', () => {
  let service: AuthadminService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthadminService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
