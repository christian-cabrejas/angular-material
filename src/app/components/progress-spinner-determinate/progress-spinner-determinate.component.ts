import { Component } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-spinner-determinate',
  templateUrl: './progress-spinner-determinate.component.html',
  styleUrls: ['./progress-spinner-determinate.component.scss'],
})
export class ProgressSpinnerDeterminateComponent {
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
