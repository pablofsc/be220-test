import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { IonicModule } from '@ionic/angular';
import { PictureCardModule } from '../picture-card/picture-card.module';
import { TestModalModule } from '../test-modal/test-modal.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PictureCardModule,
    TestModalModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule {}
