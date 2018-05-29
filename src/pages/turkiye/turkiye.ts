import { HaberDetayPage } from './../haber-detay/haber-detay';
import { HaberServiceProvider } from './../../providers/haber-service/haber-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-turkiye',
  templateUrl: 'turkiye.html',
})
export class TurkiyePage {

  newsItems: any;

  gundemNewsURL : String = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ntv.com.tr%2Fturkiye.rss';

  constructor(public navCtrl: NavController, public navParams: NavParams, public haberServiceProvider : HaberServiceProvider) { 
    this.haberServiceProvider.getNews(this.gundemNewsURL);
    this.newsItems = this.haberServiceProvider.gundemNews;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurkiyePage');
    this.haberServiceProvider.getNews(this.gundemNewsURL);
    this.newsItems = this.haberServiceProvider.gundemNews;
  }

  goDetayPage(index) {
    this.navCtrl.push(HaberDetayPage, {
      data: this.newsItems[index]
    });
  }

}
