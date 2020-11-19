import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {
  @Input() ParentinputQuestion: string = 'default';
  @Input() ParentminValue: number = 0;
  @Input() ParentmaxValue: number = 100;
  @Input() Parentunits: string = 'default';
  @Output() result = new EventEmitter();

  sliderChanged(event) {
    // console.log(event.value);
    // this.result = event.value;
    this.result.emit(event.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
