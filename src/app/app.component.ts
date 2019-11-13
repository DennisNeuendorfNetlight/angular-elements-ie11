import { Component } from '@angular/core';
import { ListItem } from './simple-list/simple-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ie11-test';

  itemsInList = [
    {
      id: 1,
      name: 'Item 1',
      color: 'blue'
    } as ListItem,
    {
      id: 2,
      name: 'Item 2',
      color: 'red'
    } as ListItem
  ];
}
