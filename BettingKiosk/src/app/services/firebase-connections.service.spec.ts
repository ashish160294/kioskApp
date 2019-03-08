import { TestBed, inject } from '@angular/core/testing';

import { FirebaseConnectionsService } from './firebase-connections.service';

describe('FirebaseConnectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseConnectionsService]
    });
  });

  it('should be created', inject([FirebaseConnectionsService], (service: FirebaseConnectionsService) => {
    expect(service).toBeTruthy();
  }));
});
