import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2cliprojAppComponent } from '../app/angular2cliproj.component';

beforeEachProviders(() => [Angular2cliprojAppComponent]);

describe('App: Angular2cliproj', () => {
  it('should create the app',
      inject([Angular2cliprojAppComponent], (app: Angular2cliprojAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2cliproj works!\'',
      inject([Angular2cliprojAppComponent], (app: Angular2cliprojAppComponent) => {
    expect(app.title).toEqual('angular2cliproj works!');
  }));
});
