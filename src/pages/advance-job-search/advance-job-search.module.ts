import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvanceJobSearchPage } from './advance-job-search';

@NgModule({
  declarations: [
    AdvanceJobSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvanceJobSearchPage),
  ],
})
export class AdvanceJobSearchPageModule {}
