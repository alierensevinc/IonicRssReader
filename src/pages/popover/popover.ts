import {Component} from '@angular/core';
import {IonicPage, ViewController} from 'ionic-angular';
import {NewsServiceProvider} from "../../providers/haber-service/news-service";

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  template: `
    <ion-list>
      <ion-item *ngFor="let category of newsService.getNewsCategory()"
                (click)="close(category)">{{category.key}}</ion-item>
    </ion-list>
  `
})
export class PopoverPage {


  constructor(public viewCtrl: ViewController,
              public newsService: NewsServiceProvider) {

  }

  close(category) {
    this.viewCtrl.dismiss({category});
  }
}
