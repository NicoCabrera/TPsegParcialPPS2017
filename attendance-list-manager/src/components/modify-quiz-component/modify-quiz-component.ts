import { Component } from '@angular/core';

/**
 * Generated class for the ModifyQuizComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'modify-quiz-component',
  templateUrl: 'modify-quiz-component.html'
})
export class ModifyQuizComponent {

  text: string;

  constructor() {
    console.log('Hello ModifyQuizComponent Component');
    this.text = 'Estás viendo el contenido del componente ModifyQuizComponent';
  }

}
