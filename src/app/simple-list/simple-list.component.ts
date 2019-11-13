import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})
export class SimpleListComponent implements OnInit {
  @Input() listItems: ListItem[];
  @Output() itemSelected: EventEmitter<ListItem>;
  currentSelection: ListItem;

  constructor() {
    this.itemSelected = this.itemSelected || new EventEmitter<ListItem>();
  }

  ngOnInit() {
    this.listItems = this.listItems || [];
  }

  onSelectItem(item: ListItem): void {
    this.itemSelected.emit(item);
    this.currentSelection = item;
  }
}

export class ListItem {
  id: number;
  name: string;
  color: string;
}
