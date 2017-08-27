import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planning-card',
  templateUrl: './planning-card.component.html',
  styleUrls: ['./planning-card.component.scss']
})
export class PlanningCardComponent implements OnInit {

  constructor() { }
  // todo: enable typing for yhr model in beta
  @Input() item: any;
  @Output() onClicked = new EventEmitter<any>();

  ngOnInit() {
  }

  getItemPriority(): string {
    return this.item.priority;
  }

  onCardCliked () {
    this.onClicked.emit(this.item);
  }
}
