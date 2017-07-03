import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { HelpAnswerSurvey } from "../../pages/help-answer-survey/help-answer-survey";
import { HelpViewAssitences } from "../../pages/help-view-assitences/help-view-assitences";

@Component({
  selector: 'help-for-student',
  templateUrl: 'help-for-student.html'
})
export class HelpForStudent {

  constructor(public navCtrl: NavController) {
  }

  seeHelp(code){
    if(code == "100"){
      this.navCtrl.parent.push(HelpAnswerSurvey);
    }else{
      this.navCtrl.parent.push(HelpViewAssitences);
    }
    
  }

}
