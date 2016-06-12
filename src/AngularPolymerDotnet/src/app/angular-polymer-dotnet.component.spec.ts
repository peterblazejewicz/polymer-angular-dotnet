import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularPolymerDotnetAppComponent } from '../app/angular-polymer-dotnet.component';

beforeEachProviders(() => [AngularPolymerDotnetAppComponent]);

describe('App: AngularPolymerDotnet', () => {
  it('should create the app',
      inject([AngularPolymerDotnetAppComponent], (app: AngularPolymerDotnetAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-polymer-dotnet works!\'',
      inject([AngularPolymerDotnetAppComponent], (app: AngularPolymerDotnetAppComponent) => {
    expect(app.title).toEqual('angular-polymer-dotnet works!');
  }));
});
