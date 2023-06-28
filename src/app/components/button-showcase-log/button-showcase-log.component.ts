import { Component } from '@angular/core';

@Component({
  selector: 'app-button-showcase-log',
  templateUrl: './button-showcase-log.component.html',
  styleUrls: ['./button-showcase-log.component.scss']
})
export class ButtonShowcaseLogComponent {

  logMessage(){
    console.log('Boton log funciona!!');
  };
}
