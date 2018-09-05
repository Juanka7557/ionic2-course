import { Component } from '@angular/core';
import {CounterProvider} from "../../providers/counter/counter";

/**
 * Generated class for the ResetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reset',
  templateUrl: 'reset.html'
})
export class ResetComponent {

  text: string;

  constructor( private counterProvider: CounterProvider) {
    console.log('Hello ResetComponent Component');
    this.text = 'Hello World';
  }
  init(){
    this.resetPress();
    this.resetTaps();
  }

  resetTaps(){
    this.counterProvider.setTappedCount(0);
    this.counterProvider.setMessage(' Tap twice, press four times');
  }

  resetPress(){
    this.counterProvider.setPressedCount(0);
    this.counterProvider.setMessage(' Tap twice, press four times');
  }

}
