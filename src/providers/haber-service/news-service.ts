import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {LoadingController} from "ionic-angular";

@Injectable()
export class NewsServiceProvider {

  newsObject: {
    content: String;
    description: String;
    link: String;
    pubDate: String;
    thumbnail: String;
    title: String;
  } [] = [];

  newsCategory: {
    key: String,
    value: String
  }[] = [
    {
      key: 'Dunya',
      value: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ntv.com.tr%2Fdunya.rss'
    },
    {
      key: 'Ekonomi',
      value: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ntv.com.tr%2Fekonomi.rss'
    },
    {
      key: 'Gundem',
      value: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ntv.com.tr%2Fgundem.rss'
    },
    {
      key: 'Spor',
      value: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ntv.com.tr%2Fspor.rss'
    },
    {
      key: 'Teknoloji',
      value: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ntv.com.tr%2Fteknoloji.rss'
    },
    {
      key: 'Turkiye',
      value: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ntv.com.tr%2Fturkiye.rss'
    },
    {
      key: 'Yasam',
      value: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ntv.com.tr%2Fyasam.rss'
    },
  ];

  newsState: any = {
    key: 'Gundem',
    value: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ntv.com.tr%2Fgundem.rss'
  };

  constructor(public http: Http,
              public loadingCtrl: LoadingController) {
  }

  getNews(newsUrl) {
    const loading = this.loadingCtrl.create({
      content: 'Lütfen bekleyin',
      spinner: 'crescent'
    });
    loading.present();
    this.http.get(newsUrl)
      .map(res => res.json())
      .subscribe(data => {
        this.newsObject.length = 0;
        for (let i = 0; i < data.items.length; i++) {
          this.newsObject.push({
            content: data.items[i].content,
            description: data.items[i].description,
            link: data.items[i].link,
            pubDate: data.items[i].pubDate,
            thumbnail: data.items[i].thumbnail,
            title: data.items[i].title
          });
        }
        loading.dismiss();
        return this.newsObject;
      });
  }

  getNewsCategory() {
    return this.newsCategory;
  }

  setNewsState(state) {
    this.newsState = state;
  }

}


