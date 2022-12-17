import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../quiz.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit, OnChanges {
  @Input() question!: Question;

  @Output() onChoiceMade = new EventEmitter<string>();
  @Output() onDragChangeMade = new EventEmitter<string[]>();

  form!: FormGroup;
  options: string[] = [];
  answers: string[] = [];

  ngOnInit() {
    this.form = new FormGroup({
      choice: new FormControl(),
    });
    this.form.valueChanges.subscribe(this.onChange);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.options = [];
    this.answers = [];

    if (this.question.options && this.question.answers) {
      this.options = [...this.question.options, ...this.question.answers];
    }
  }

  onChange = () => {
    this.onChoiceMade.emit(this.form.value.choice);
  };

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.onDragChangeMade.emit(this.answers);
  }
}
