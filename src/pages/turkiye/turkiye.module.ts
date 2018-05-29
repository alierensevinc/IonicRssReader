import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurkiyePage } from './turkiye';

@NgModule({
  declarations: [
    TurkiyePage,
  ],
  imports: [
    IonicPageModule.forChild(TurkiyePage),
  ],
})
export class TurkiyePageModule {}
