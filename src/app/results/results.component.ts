import { Component, Input } from '@angular/core';
import { Answers, Question } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent {
  @Input()
  answers?: Answers;
  @Input()
  questions?: Question[];
}
