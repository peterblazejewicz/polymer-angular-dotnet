import { AngularPolymerDotnetPage } from './app.po';

describe('angular-polymer-dotnet App', function() {
  let page: AngularPolymerDotnetPage;

  beforeEach(() => {
    page = new AngularPolymerDotnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-polymer-dotnet works!');
  });
});
