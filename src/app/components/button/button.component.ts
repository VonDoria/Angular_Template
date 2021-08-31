import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{

  @Input() color = 'primary';
  @Input() size = '';
  @Input() border = '';
  @Input() outline = false;
  @Input() data = '';

  @Output() newEvent = new EventEmitter<string>();

  constructor() {
  }

  clickEvent() {
    this.newEvent.emit(this.data);
  }

}
