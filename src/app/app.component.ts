import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.Emulated // default is Emulated. can change to None, Native
})
export class AppComponent {
  title = 'my-portfolio';

  homeClicked = false;
  aboutmeClicked = false;

  onRedirectionClicked(type: string) {
    this.homeClicked = false;
    this.aboutmeClicked = false;
    if (type) {
      if (type === 'home') {
        this.homeClicked = true;
      } else if (type === 'aboutme') {
        this.aboutmeClicked = true;
      }
    }
  }
}
