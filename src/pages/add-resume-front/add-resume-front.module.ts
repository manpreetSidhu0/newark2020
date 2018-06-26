import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddResumeFrontPage } from './add-resume-front';

@NgModule({
  declarations: [
    AddResumeFrontPage,
  ],
  imports: [
    IonicPageModule.forChild(AddResumeFrontPage),
  ],
})
export class AddResumeFrontPageModule {}
