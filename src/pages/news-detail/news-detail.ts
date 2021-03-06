import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {

  inspectedNews: {
    content: String;
    description: String;
    link: String;
    pubDate: String;
    thumbnail: String;
    title: String;
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    this.inspectedNews = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HaberDetayPage');
  }

}
