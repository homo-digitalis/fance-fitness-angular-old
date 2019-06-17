import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MondayComponent } from './monday/monday.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'monday',
    component: MondayComponent
  },
  {
    path: '',
    component: LandingPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
