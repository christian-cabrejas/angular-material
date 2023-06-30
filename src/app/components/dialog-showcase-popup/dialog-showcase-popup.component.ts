import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../dialog-showcase-complete/dialog-showcase-complete.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-showcase-popup',
  templateUrl: './dialog-showcase-popup.component.html',
  styleUrls: ['./dialog-showcase-popup.component.scss'],
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class DialogShowcasePopupComponent {
  constructor(public dialogRef: MatDialogRef<DialogShowcasePopupComponent>,
              @Inject (MAT_DIALOG_DATA) public data: DialogData, ){
    dialogRef.disableClose = true;
  }


  onNoClick(): void{
    this.dialogRef.disableClose;
    this.dialogRef.close();
  }


}
