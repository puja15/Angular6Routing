import { TestBed, inject } from '@angular/core/testing';

import { RectangleService } from './rectangle.service';

describe('RectangleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RectangleService]
    });
  });

  it('should be created', inject([RectangleService], (service: RectangleService) => {
    expect(service).toBeTruthy();
  }));
});
