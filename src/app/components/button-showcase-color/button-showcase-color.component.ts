import { Component } from '@angular/core';

@Component({
  selector: 'app-button-showcase-color',
  templateUrl: './button-showcase-color.component.html',
  styleUrls: ['./button-showcase-color.component.scss']
})
export class ButtonShowcaseColorComponent {
  colorName: 'Accent' | 'Primary' = 'Accent'
  finalColor:'accent' | 'primary' = 'accent'
  toggle = true;
  colorChange(){
    this.toggle = !this.toggle;
    this.colorName = this.toggle ? 'Accent' : 'Primary'
    this.finalColor = this.toggle ? 'accent': 'primary'
  }
}
