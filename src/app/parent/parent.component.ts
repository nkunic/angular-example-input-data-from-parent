import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {

  items = [
    'item1', 
    'item2', 
    'item3'
  ];

}