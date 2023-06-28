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

@NgModule({
  declarations: [
    AppComponent,
    ButtonShowcasePageComponent,
    ButtonShowcaseLogComponent,
    ButtonShowcaseColorComponent,
    ButtonShowcaseStatusComponent,
    ButtonBackComponent,
    ProgressSpinnerDeterminateComponent,
    ProgressSpinnerShowcasePageComponent
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
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
