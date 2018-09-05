import { Injectable } from '@angular/core';

/*
  Generated class for the CounterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CounterProvider {
  tappedCount: number;
  pressedCount: number;
  message: string;
  constructor() {
    console.log('Hello CounterProvider Provider');
  }

  setTappedCount(tappedCount: number):void{
    this.tappedCount=tappedCount;
  }
  getTappedCount(){
    return this.tappedCount;
  }
  setPressedCount(pressedCount: number):void{
    this.pressedCount=pressedCount;
  }
  getPressedCount(){
    return this.pressedCount;
  }
  setMessage(text:string){
    this.message=text;
  }
  getMessage(){
    return this.message;
  }
}
