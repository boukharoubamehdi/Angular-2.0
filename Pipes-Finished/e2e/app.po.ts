export class PipesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pipes-app h1')).getText();
  }
}
