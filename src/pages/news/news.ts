import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {NewsServiceProvider} from "../../providers/haber-service/news-service";
import {NewsDetailPage} from "../news-detail/news-detail";
import {PopoverPage} from "../popover/popover";

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  newsItems: any;
  newsTitle = 'Gündem';

  constructor(public navCtrl: NavController, public navParams: NavParams, public newsService: NewsServiceProvider,
              public popoverCtrl: PopoverController) {
    this.newsService.getNews(this.newsService.newsState.value);
    this.newsItems = this.newsService.newsObject;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GundemPage');
  }

  goNewDetails(index) {
    this.navCtrl.push(NewsDetailPage, {
      data: this.newsItems[index]
    });
  }

  presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent,
    });
    popover.onDidDismiss(data => {
      if (data !== undefined && data !== null) {
        console.log(data);
        this.newsService.getNews(data.category.value);
        this.newsItems = this.newsService.newsObject;
        this.newsTitle = data.category.key;
      }
    });
  }

}
