import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { HelpCreateSurveyTeacher } from "../../pages/help-create-survey-teacher/help-create-survey-teacher";
import { HelpDeleteSurveyTeacher } from "../../pages/help-delete-survey-teacher/help-delete-survey-teacher";
import { HelpUpdateSurveyTeacher } from "../../pages/help-update-survey-teacher/help-update-survey-teacher";
import { HelpTakeAssistanceTeacher } from "../../pages/help-take-assistance-teacher/help-take-assistance-teacher";
import { HelpViewStatisticsTeacher } from "../../pages/help-view-statistics-teacher/help-view-statistics-teacher";

@Component({
  selector: 'help-for-teacher',
  templateUrl: 'help-for-teacher.html'
})
export class HelpForTeacher {

   constructor(public navCtrl: NavController) {
  }

  seeHelp(code) {
    switch (code) {
      case 100:
        this.navCtrl.parent.push(HelpCreateSurveyTeacher);
        break;
      case 101:
        this.navCtrl.parent.push(HelpDeleteSurveyTeacher);
        break;
      case 102:
        this.navCtrl.parent.push(HelpUpdateSurveyTeacher);
        break;
      case 103:
        this.navCtrl.parent.push(HelpTakeAssistanceTeacher);
        break;
      case 104:
        this.navCtrl.parent.push(HelpViewStatisticsTeacher);
        break;
      default:
        break;
    }
  }
}
