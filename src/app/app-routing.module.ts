import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';

const routes: Routes = [
  { path: 'button',component: ButtonShowcaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
