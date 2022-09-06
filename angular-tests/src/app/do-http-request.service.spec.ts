import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DoHttpRequestService } from './do-http-request.service';

describe('DoHttpRequestService', () => {
  let service: DoHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(DoHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
