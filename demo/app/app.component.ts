import { Component } from '@angular/core';
import { Globals } from '@angeeks/globals';

@Component({
  selector: 'ngk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngk';
  docTitle = '';
  constructor(private g: Globals) {
    this.docTitle = g.document.title;
  }
}
