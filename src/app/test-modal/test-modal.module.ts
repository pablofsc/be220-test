import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModalComponent } from './test-modal.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    TestModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TestModalComponent
  ]
})
export class TestModalModule {}
