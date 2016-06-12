export class AngularPolymerDotnetPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-polymer-dotnet-app h1')).getText();
  }
}
