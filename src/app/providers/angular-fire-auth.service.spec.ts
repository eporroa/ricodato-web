import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuthService } from './angular-fire-auth.service';

describe('AngularFireAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFireAuthService]
    });
  });

  it('should ...', inject([AngularFireAuthService], (service: AngularFireAuthService) => {
    expect(service).toBeTruthy();
  }));
});
