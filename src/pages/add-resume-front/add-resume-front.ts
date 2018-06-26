import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import {ResumesPage} from '../resumes/resumes'

/**
 * Generated class for the AddResumeFrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-resume-front',
  templateUrl: 'add-resume-front.html',
})
export class AddResumeFrontPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav:Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddResumeFrontPage');
  }
  addResumePage(){
this.navCtrl.setRoot(ResumesPage);
  }

}
