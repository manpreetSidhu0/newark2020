import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobSearchAgentPage } from './job-search-agent';

@NgModule({
  declarations: [
    JobSearchAgentPage,
  ],
  imports: [
    IonicPageModule.forChild(JobSearchAgentPage),
  ],
})
export class JobSearchAgentPageModule {}
