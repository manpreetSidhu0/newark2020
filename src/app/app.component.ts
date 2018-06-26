import { Component,ViewChild, } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {AdvanceJobSearchPage} from '../pages/advance-job-search/advance-job-search';
import {AppliedJobsPage} from '../pages/applied-jobs/applied-jobs';
import {EditProfilePage} from '../pages/edit-profile/edit-profile';
import {JobSearchAgentPage} from '../pages/job-search-agent/job-search-agent';
import {ResumesPage} from '../pages/resumes/resumes';
import {TabsPage} from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  openPage(page) {
   
    this.nav.setRoot(page.component);
 
  }


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
     
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Advance Job Search', component: AdvanceJobSearchPage },
      { title: 'Job Search Agent', component: JobSearchAgentPage },
      { title: 'Applied Jobs', component: AppliedJobsPage },
      { title: 'Resumes', component: ResumesPage },
      { title: 'Edit Profile', component: EditProfilePage },
    ];
 
  }
}

