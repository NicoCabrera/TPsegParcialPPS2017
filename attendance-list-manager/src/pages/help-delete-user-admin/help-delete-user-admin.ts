import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-help-delete-user-admin',
  templateUrl: 'help-delete-user-admin.html',
})
export class HelpDeleteUserAdmin {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpDeleteUserAdmin');
  }

}
