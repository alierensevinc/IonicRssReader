import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HaberServiceProvider } from '../providers/haber-service/haber-service';
import { HttpModule } from '@angular/http';

import { YasamPage } from './../pages/yasam/yasam';
import { TurkiyePage } from './../pages/turkiye/turkiye';
import { TeknolojiPage } from './../pages/teknoloji/teknoloji';
import { SporPage } from './../pages/spor/spor';
import { GundemPage } from './../pages/gundem/gundem';
import { EkonomiPage } from './../pages/ekonomi/ekonomi';
import { DunyaPage } from './../pages/dunya/dunya';
import { HaberDetayPage } from './../pages/haber-detay/haber-detay';
import { SplashPage } from './../pages/splash/splash';

@NgModule({
  declarations: [
    MyApp,
    YasamPage,
    TurkiyePage,
    TeknolojiPage,
    SporPage,
    GundemPage,
    EkonomiPage,
    DunyaPage,
    HaberDetayPage,
    SplashPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    YasamPage,
    TurkiyePage,
    TeknolojiPage,
    SporPage,
    GundemPage,
    EkonomiPage,
    DunyaPage,
    HaberDetayPage,
    SplashPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HaberServiceProvider
  ]
})
export class AppModule {}
