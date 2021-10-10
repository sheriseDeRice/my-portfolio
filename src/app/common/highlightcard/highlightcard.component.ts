import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlightcard',
  templateUrl: './highlightcard.component.html',
  styleUrls: ['./highlightcard.component.css']
})
export class HighlightcardComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
