import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-help-view-assitences',
  templateUrl: 'help-view-assitences.html',
})
export class HelpViewAssitences {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpViewAssitences');
  }

}
