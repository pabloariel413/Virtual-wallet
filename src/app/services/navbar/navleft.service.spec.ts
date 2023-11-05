import { TestBed } from '@angular/core/testing';

import { NavleftService } from './navleft.service';

describe('NavleftService', () => {
  let service: NavleftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavleftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
