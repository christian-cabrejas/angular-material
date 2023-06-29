import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-showcase-popup',
  templateUrl: './dialog-showcase-popup.component.html',
  styleUrls: ['./dialog-showcase-popup.component.scss'],
  standalone: true,
  imports: [MatDialogModule]
})
export class DialogShowcasePopupComponent {
  constructor(public dialogRef: MatDialogRef<DialogShowcasePopupComponent>, ){
    
  }

}
