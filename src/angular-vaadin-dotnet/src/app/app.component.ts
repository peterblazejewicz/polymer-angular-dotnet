import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  clicked(event): void {
    window.alert('clicked');
  }
}
