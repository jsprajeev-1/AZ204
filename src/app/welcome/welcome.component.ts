import { Component } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  quiz?: Quiz[];

  constructor(private questionsService: QuestionsService) {
    this.questionsService.getQuizzes()
      .subscribe(quiz => {
        this.quiz = quiz;
      });
  }
}
