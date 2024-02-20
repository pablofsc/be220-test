import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ProfileSummaryModule } from '../profile-summary/profile-summary.module';
import { HomePageModule } from '../home-page/home-page.module';
import { TestModalModule } from '../test-modal/test-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ProfileSummaryModule,
    HomePageModule,
    TestModalModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
