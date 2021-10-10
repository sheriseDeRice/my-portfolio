import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() title;

  @Input() homeClicked;
  @Input() aboutmeClicked;

  constructor() { }

  ngOnInit(): void {
  }

}
