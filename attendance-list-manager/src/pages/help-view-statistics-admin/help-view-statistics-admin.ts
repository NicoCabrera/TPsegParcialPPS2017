import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-help-view-statistics-admin',
  templateUrl: 'help-view-statistics-admin.html',
})
export class HelpViewStatisticsAdmin {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpViewStatisticsAdmin');
  }

}
