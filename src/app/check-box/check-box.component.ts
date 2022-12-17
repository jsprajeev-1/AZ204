import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Question } from '../quiz.model';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
})
export class CheckBoxComponent {
  @Input() question!: Question;

  checkBoxForm: FormGroup;

  checkBoxValueList = ['Reading', 'Watching', 'Traveling', 'Cooking'];
  answers = {
    Reading: true,
    Watching: false,
    Traveling: true,
    Cooking: false,
  };

  reactiveForm: FormGroup = new FormGroup({
    yourChoice: new FormControl(),
  });

  constructor(public fb: FormBuilder) {
    const FormControlObject: any = {};
    this.checkBoxValueList.forEach((res) => {
      FormControlObject[res] = new FormControl(false);
    });
    this.checkBoxForm = this.fb.group(FormControlObject);
  }

  areValuesCorrect() {
    console.log(this.answers);
    console.log(this.checkBoxForm.value);
    console.log(
      JSON.stringify(this.answers) === JSON.stringify(this.checkBoxForm.value)
    );
  }
}
