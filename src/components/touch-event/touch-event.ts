import { Component } from '@angular/core';

/**
 * Generated class for the TouchEventComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'touch-event',
  templateUrl: 'touch-event.html'
})
export class TouchEventComponent {

  text: string;

  constructor() {
    console.log('Hello TouchEventComponent Component');
    this.text = 'Hello World';
  }

  onClick(){
    console.log('test');
  }
  onElementClick(){
    console.log(' I was Clicked');
  }

  onElementTapped(){
    console.log(' I was Tapped');
  }

  onElementPress(){
    console.log(' I was Press');
  }
}
