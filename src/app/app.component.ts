import {Component, ViewChild} from '@angular/core';
import {ModalController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SplashPage} from './../pages/splash/splash';
import {NewsPage} from "../pages/news/news";
import {NewsServiceProvider} from "../providers/haber-service/news-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = NewsPage;
  pages: any;
  pageState: String = 'Gundem';

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public modalController: ModalController,
              public newsService: NewsServiceProvider) {
    this.initializeApp();

    this.pages = this.newsService.getNewsCategory();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      const splash = this.modalController.create(SplashPage);
      splash.present();
    });
  }

  openPage(page) {
    this.newsService.setNewsState(page);
  }
}
