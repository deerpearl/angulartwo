import { Angular2cliprojPage } from './app.po';

describe('angular2cliproj App', function() {
  let page: Angular2cliprojPage;

  beforeEach(() => {
    page = new Angular2cliprojPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2cliproj works!');
  });
});
