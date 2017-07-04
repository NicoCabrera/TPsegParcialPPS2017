import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { HelpTakeAssistenceAdministrative } from "../../pages/help-take-assistence-administrative/help-take-assistence-administrative";
import { HelpCreateUsersAdministrative } from "../../pages/help-crud-users-administrative/help-crud-users-administrative";
import { HelpDeleteUserAdministrative } from "../../pages/help-delete-user-administrative/help-delete-user-administrative";
import { HelpUpdateUserAdministrative } from "../../pages/help-update-user-administrative/help-update-user-administrative";
import { HelpCreateSurveyAdministrative } from "../../pages/help-create-survey-administrative/help-create-survey-administrative";
import { HelpUpdateSurveyAdministrative } from "../../pages/help-update-survey-administrative/help-update-survey-administrative";
import { HelpDeleteSurveyAdministrative } from "../../pages/help-delete-survey-administrative/help-delete-survey-administrative";

@Component({
  selector: 'help-for-administrative',
  templateUrl: 'help-for-administrative.html'
})
export class HelpForAdministrative {


  constructor(public navCtrl: NavController) {
  }

  seeHelp(code) {
    switch (code) {
      case 100:
        this.navCtrl.parent.push(HelpTakeAssistenceAdministrative);
        break;
      case 101:
        this.navCtrl.parent.push(HelpCreateUsersAdministrative);
        break;
      case 102:
        this.navCtrl.parent.push(HelpDeleteUserAdministrative);
        break;
      case 103:
        this.navCtrl.parent.push(HelpUpdateUserAdministrative);
        break;
      case 104:
        this.navCtrl.parent.push(HelpCreateSurveyAdministrative);
        break;
      case 105:
        this.navCtrl.parent.push(HelpDeleteSurveyAdministrative);
        break;
      case 106:
        this.navCtrl.parent.push(HelpUpdateSurveyAdministrative);
        break;
      default:
        break;
    }
  }
}
