import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogShowcasePopupComponent } from '../dialog-showcase-popup/dialog-showcase-popup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatCard, MatCardModule } from '@angular/material/card';

export interface DialogData{
  manga: string;
  name: string;
}

@Component({
  selector: 'app-dialog-showcase-complete',
  templateUrl: './dialog-showcase-complete.component.html',
  styleUrls: ['./dialog-showcase-complete.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
    MatCardModule
  ]
})
export class DialogShowcaseCompleteComponent {
  name:string = '';
  manga: string = '';

  constructor(public matDialog: MatDialog){

  }

  startDialog(){
     const dialogRef = this.matDialog.open(DialogShowcasePopupComponent,{data: {name:this.name, manga:this.manga}});

     dialogRef.afterClosed().subscribe(result => { console.log('Dialog Closed');
      this.manga= result;
    })

  }

}
