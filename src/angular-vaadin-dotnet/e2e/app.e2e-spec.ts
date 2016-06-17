import { AngularVaadinDotnetPage } from './app.po';

describe('angular-vaadin-dotnet App', function() {
  let page: AngularVaadinDotnetPage;

  beforeEach(() => {
    page = new AngularVaadinDotnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
