import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() redirectionType = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageRedirection(type) {
    this.redirectionType.emit(type);
  }

}
