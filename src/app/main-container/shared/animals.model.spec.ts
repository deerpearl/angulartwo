import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Animals} from './animals.model';

describe('Animals', () => {
  it('should create an instance', () => {
    expect(new Animals()).toBeTruthy();
  });
});
