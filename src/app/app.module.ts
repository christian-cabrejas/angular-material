import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonShowcasePageComponent } from './pages/button-showcase-page/button-showcase-page.component';
import { ButtonShowcaseLogComponent } from './components/button-showcase-log/button-showcase-log.component';
import { ButtonShowcaseColorComponent } from './components/button-showcase-color/button-showcase-color.component';
import { ButtonShowcaseStatusComponent } from './components/button-showcase-status/button-showcase-status.component';
import { ButtonBackComponent } from './components/button-back/button-back.component';
import { ProgressSpinnerDeterminateComponent } from './components/progress-spinner-determinate/progress-spinner-determinate.component';
import { ProgressSpinnerShowcasePageComponent } from './pages/progress-spinner-showcase-page/progress-spinner-showcase-page.component';
import { FormsModule } from '@angular/forms';
import { SnackbarShowcasePageComponent } from './pages/snackbar-showcase-page/snackbar-showcase-page.component';
import { SnackbarShowcaseMixComponent } from './components/snackbar-showcase-mix/snackbar-showcase-mix.component';
import { DialogShowcasePageComponent } from './pages/dialog-showcase-page/dialog-showcase-page.component';
import { DialogShowcaseCompleteComponent } from './components/dialog-showcase-complete/dialog-showcase-complete.component';
import { DialogShowcasePopupComponent } from './components/dialog-showcase-popup/dialog-showcase-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonShowcasePageComponent,
    ButtonShowcaseLogComponent,
    ButtonShowcaseColorComponent,
    ButtonShowcaseStatusComponent,
    ButtonBackComponent,
    ProgressSpinnerDeterminateComponent,
    ProgressSpinnerShowcasePageComponent,
    SnackbarShowcasePageComponent,
    SnackbarShowcaseMixComponent,
    DialogShowcasePageComponent,
  ],
  imports: [
    BrowserModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSliderModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    DialogShowcaseCompleteComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
