/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendEmailService } from './send-email.service';

describe('SendEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendEmailService]
    });
  });

  it('should ...', inject([SendEmailService], (service: SendEmailService) => {
    expect(service).toBeTruthy();
  }));
});
