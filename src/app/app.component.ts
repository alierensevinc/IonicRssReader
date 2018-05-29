import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GundemPage } from './../pages/gundem/gundem';
import { SporPage } from '../pages/spor/spor';
import { TeknolojiPage } from './../pages/teknoloji/teknoloji';
import { YasamPage } from './../pages/yasam/yasam';
import { EkonomiPage } from './../pages/ekonomi/ekonomi';
import { DunyaPage } from './../pages/dunya/dunya';
import { TurkiyePage } from './../pages/turkiye/turkiye';
import { SplashPage } from './../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GundemPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalController : ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Gündem', component: GundemPage },
      { title: 'Türkiye', component: TurkiyePage },
      { title: 'Dünya', component: DunyaPage },
      { title: 'Ekonomi', component: EkonomiPage },
      { title: 'Spor', component: SporPage },
      { title: 'Yaşam', component: YasamPage },
      { title: 'Teknoloji', component: TeknolojiPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      
      let splash = this.modalController.create(SplashPage);
      splash.present();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
