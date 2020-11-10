import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'number-game';
  number: number = 100;
  percent: number = 1;
  guess: number = 56;
  feedback: string = '';
  count: number = 1;
  list: string[] = [];
  //submit function that
  submit() {
    console.log(this.guess);
    const correctAnswer = Math.sqrt(this.number);
    this.guess = Number(this.guess);
    if (
      Math.abs(this.guess - correctAnswer) / correctAnswer <=
      this.percent / 100
    ) {
      this.feedback =
        this.guess + ' is close enough! Correct answer is ' + correctAnswer;
      this.list.push(this.feedback);
    } else if (this.guess < correctAnswer) {
      // answer is too low
      this.feedback = this.guess + ' is too low. Try again.';
      this.list.push(this.feedback);
      this.count += 1;
    } else {
      // answer is too high.
      this.feedback = this.guess + ' is too high. Try again.';
      this.list.push(this.feedback);
      this.count += 1;
    }
    console.log(this.list);
  }

  randomize() {
    this.number = Math.random() * 200 + 50;
    console.log(this.number);
  }
}
