import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HaberDetayPage } from './haber-detay';

@NgModule({
  declarations: [
    HaberDetayPage,
  ],
  imports: [
    IonicPageModule.forChild(HaberDetayPage),
  ],
})
export class HaberDetayPageModule {}
