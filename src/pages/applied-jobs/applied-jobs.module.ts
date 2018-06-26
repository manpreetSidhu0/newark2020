import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppliedJobsPage } from './applied-jobs';

@NgModule({
  declarations: [
    AppliedJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(AppliedJobsPage),
  ],
})
export class AppliedJobsPageModule {}
