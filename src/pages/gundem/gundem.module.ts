import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GundemPage } from './gundem';

@NgModule({
  declarations: [
    GundemPage,
  ],
  imports: [
    IonicPageModule.forChild(GundemPage),
  ],
})
export class GundemPageModule {}
