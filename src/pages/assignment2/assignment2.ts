import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CounterProvider} from "../../providers/counter/counter";

/**
 * Generated class for the Assignment2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assignment2',
  templateUrl: 'assignment2.html',
})
export class Assignment2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public counterProvider: CounterProvider) {
    this.init();
  }

  init(){
    this.counterProvider.setTappedCount(0);
    this.counterProvider.setPressedCount(0);
    this.counterProvider.setMessage(' Tap twice, press four times');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Assignment2Page');
  }

  onTap(){
    this.counterProvider.setTappedCount(this.counterProvider.getTappedCount() + 1)
    this.validRule();
  }

  onPress(){
    this.counterProvider.setPressedCount(this.counterProvider.getPressedCount() + 1);
    this.validRule();
  }

  validRule(){
    if(this.counterProvider.getTappedCount()==2){
      if(this.counterProvider.getPressedCount() ==4){
        this.counterProvider.setMessage('You Won');
      }
    }
  }

}
