import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YasamPage } from './yasam';

@NgModule({
  declarations: [
    YasamPage,
  ],
  imports: [
    IonicPageModule.forChild(YasamPage),
  ],
})
export class YasamPageModule {}
