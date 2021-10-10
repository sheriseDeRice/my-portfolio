import { Component } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutMeComponent {
  title = 'about-me';

  count = 0;

  onClick() {
    this.count++;
  }
}
