import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-haber-detay',
  templateUrl: 'haber-detay.html',
})
export class HaberDetayPage {

  inspectedNews : {
    content: String;
    description: String;
    link: String;
    pubDate: String;
    thumbnail: String;
    title: String;
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, ) { 
    this.inspectedNews = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HaberDetayPage');
  }

}
