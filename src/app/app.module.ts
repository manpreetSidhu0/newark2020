import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CustomHeaderComponent} from '../components/custom-header/custom-header';
import {CustomFooterComponent} from '../components/custom-footer/custom-footer';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdvanceJobSearchPage} from '../pages/advance-job-search/advance-job-search';
import {AppliedJobsPage} from '../pages/applied-jobs/applied-jobs';
import {EditProfilePage} from '../pages/edit-profile/edit-profile';
import {JobSearchAgentPage} from '../pages/job-search-agent/job-search-agent';
import {ResumesPage} from '../pages/resumes/resumes';
import {FeatureEmloyersPage} from '../pages/feature-emloyers/feature-emloyers'
import { Data } from '../providers/data/data';
import {AddResumeFrontPage} from '../pages/add-resume-front/add-resume-front'
import {FooterPage} from '../pages/footer/footer';
import {TabsPage} from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CustomHeaderComponent,
    CustomFooterComponent,
    AdvanceJobSearchPage,
    AppliedJobsPage,
    EditProfilePage,
    JobSearchAgentPage,
    ResumesPage,
    FeatureEmloyersPage,
    AddResumeFrontPage,
    FooterPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CustomHeaderComponent,
    AdvanceJobSearchPage,
    AppliedJobsPage,
    EditProfilePage,
    JobSearchAgentPage,
    ResumesPage,
    FeatureEmloyersPage,
    AddResumeFrontPage,
    FooterPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
