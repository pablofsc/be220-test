import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureCardComponent } from './picture-card.component';
import { IonicModule } from '@ionic/angular';
import { TestModalModule } from '../test-modal/test-modal.module';



@NgModule({
  declarations: [
    PictureCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TestModalModule
  ],
  exports: [
    PictureCardComponent
  ]
})
export class PictureCardModule {}
