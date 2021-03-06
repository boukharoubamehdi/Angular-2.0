import { browser, element, by } from 'protractor';

export class AuthenticationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aut-root h1')).getText();
  }
}
