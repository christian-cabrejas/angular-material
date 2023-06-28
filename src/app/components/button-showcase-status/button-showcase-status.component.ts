import { Component } from '@angular/core';

@Component({
  selector: 'app-button-showcase-status',
  templateUrl: './button-showcase-status.component.html',
  styleUrls: ['./button-showcase-status.component.scss']
})
export class ButtonShowcaseStatusComponent {
  stateButton = false;
  estado = 'Enable'
  changeState():void{
    this.stateButton = !this.stateButton;
    this.estado = this.stateButton ? 'Disable' : 'Enable';
  }

}
