import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TouchEventComponent} from "../components/touch-event/touch-event";
import {Assignment2Page} from "../pages/assignment2/assignment2";
import {ResetComponent} from "../components/reset/reset";
import { CounterProvider } from '../providers/counter/counter';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TouchEventComponent,
    Assignment2Page,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Assignment2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CounterProvider
  ]
})
export class AppModule {}
