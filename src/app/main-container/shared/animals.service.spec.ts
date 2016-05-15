import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AnimalsService } from './animals.service';

describe('Animals Service', () => {
  beforeEachProviders(() => [AnimalsService]);

  it('should ...',
      inject([AnimalsService], (service: AnimalsService) => {
    expect(service).toBeTruthy();
  }));
});
