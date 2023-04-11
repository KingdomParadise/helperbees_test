import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'stepper',
    loadChildren: () =>
      import('./pages/stepper/stepper.module').then((m) => m.StepperModule),
  },
  {
    path: 'final',
    loadChildren: () =>
      import('./pages/final/final.module').then((m) => m.FinalModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
