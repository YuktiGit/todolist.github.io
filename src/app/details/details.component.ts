import { Component, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input()
  tDetail: string | undefined;
  @Output() msgEvent = new EventEmitter();
  msg = 'Passing message from child';
  constructor() {}

  ngOnInit(): void {}
  sendMessage() {
    this.msgEvent.emit(this.msg);
  }
}
