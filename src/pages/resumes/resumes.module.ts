import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumesPage } from './resumes';

@NgModule({
  declarations: [
    ResumesPage,
  ],
  imports: [
    IonicPageModule.forChild(ResumesPage),
  ],
})
export class ResumesPageModule {}
