import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSummaryComponent } from './profile-summary.component';



@NgModule({
  declarations: [
    ProfileSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileSummaryComponent
  ]
})
export class ProfileSummaryModule {}
