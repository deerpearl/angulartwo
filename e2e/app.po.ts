export class Angular2cliprojPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2cliproj-app h1')).getText();
  }
}
