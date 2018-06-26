import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slide } from 'ionic-angular';
import {Data} from '../../providers/data/data';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
 

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [


    trigger('text', [
      state('*',style({
        transform:'translateX(0)'
      })),
      transition('* =>rightSwipe',animate('700ms easeout',keyframes([
        style({transform:'translateX(0)',offset:0}),
        style({transform:'translateX(-65)',offset:.3}),
        style({transform:'translateX(0)',offset:1})
      ]))),
  
    ])
  ]
})


export class HomePage {

@ViewChild(Slide) slides: Slide;
text:string ="we are greate";
state:string ='x';


  searchTerm:string='';
  items:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:Data) {
    }

    ionViewDidLoad() {
 
      this.setFilteredItems();

  }

  setFilteredItems() {

      this.items = this.data.filterItems(this.searchTerm);

  }
  }

  


