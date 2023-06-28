import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonShowcasePageComponent } from './pages/button-showcase-page/button-showcase-page.component';
import { ProgressSpinnerShowcasePageComponent } from './pages/progress-spinner-showcase-page/progress-spinner-showcase-page.component';


const routes: Routes = [
  { path: 'button',component: ButtonShowcasePageComponent},
  { path: 'progressSpinner', component:ProgressSpinnerShowcasePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
