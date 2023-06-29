import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-showcase-mix',
  templateUrl: './snackbar-showcase-mix.component.html',
  styleUrls: ['./snackbar-showcase-mix.component.scss']
})
export class SnackbarShowcaseMixComponent {
  constructor(private _snackbar: MatSnackBar){}

  durationInSeconds = 5
  clickSnackbar(message: string, action: string){
    this._snackbar.open(message,action,{duration: this.durationInSeconds*1000});
  }

}
