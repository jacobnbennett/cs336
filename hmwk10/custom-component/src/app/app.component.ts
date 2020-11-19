import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-component';
  inputQuestion: string = 'how cute is this dog';
  minValue: number = 10;
  maxValue: number = 100;
  units: string = 'cuteness';

  gotResult(event) {
    console.log(event);
    console.log('got results is working');
  }
  ngOninit() {}
}
