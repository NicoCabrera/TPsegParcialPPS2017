import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-help-update-user-admin',
  templateUrl: 'help-update-user-admin.html',
})
export class HelpUpdateUserAdmin {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpUpdateUserAdmin');
  }

}
