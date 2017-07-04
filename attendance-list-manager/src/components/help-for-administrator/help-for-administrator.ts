import { Component } from '@angular/core';
import { HelpCreateUserAdmin } from "../../pages/help-create-user-admin/help-create-user-admin";
import { HelpDeleteUserAdmin } from "../../pages/help-delete-user-admin/help-delete-user-admin";
import { HelpUpdateUserAdmin } from "../../pages/help-update-user-admin/help-update-user-admin";
import { HelpViewStatisticsAdmin } from "../../pages/help-view-statistics-admin/help-view-statistics-admin";
import { NavController } from "ionic-angular";

@Component({
  selector: 'help-for-administrator',
  templateUrl: 'help-for-administrator.html'
})
export class HelpForAdministrator {

  constructor(public navCtrl: NavController) {
  }

  seeHelp(code) {
    switch (code) {
      case 100:
        this.navCtrl.parent.push(HelpCreateUserAdmin);
        break;
      case 101:
        this.navCtrl.parent.push(HelpDeleteUserAdmin);
        break;
      case 102:
        this.navCtrl.parent.push(HelpUpdateUserAdmin);
        break;
      case 103:
        this.navCtrl.parent.push(HelpViewStatisticsAdmin);
        break;
      default:
        break;
    }
  }
}
