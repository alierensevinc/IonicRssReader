import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HaberServiceProvider {

  gundemNews : {
      content: String;
      description: String;
      link: String;
      pubDate: String;
      thumbnail: String;
      title: String;
  } [] = [];

  constructor(public http: Http) {
    console.log('Hello HaberServiceProvider Provider');
  }

  getNews(newsUrl) {
    this.http.get(newsUrl)
      .map(res => res.json())
      .subscribe(data => { 

        this.gundemNews.length = 0;
        
        for(let i = 0; i<data.items.length; i++) {
          this.gundemNews.push({
            content: data.items[i].content, 
            description: data.items[i].description, 
            link: data.items[i].link, 
            pubDate: data.items[i].pubDate, 
            thumbnail: data.items[i].thumbnail, 
            title: data.items[i].title
          });  
        }
        
        return this.gundemNews;
    });
  }

}


