// Angular modules
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'stepper-progress-bar',
  templateUrl: './stepper-progress-bar.component.html',
  styleUrls: ['./stepper-progress-bar.component.scss'],
})
export class StepperProgressBarComponent implements OnInit {
  @Input()
  public step: number = 0;

  constructor() {}

  public ngOnInit(): void {}
}
