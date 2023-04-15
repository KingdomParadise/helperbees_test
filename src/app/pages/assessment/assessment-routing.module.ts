import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssessmentComponent } from './assessment.component';

const routes: Routes = [
  {
    path: '',
    component: AssessmentComponent,
    children: [
      {
        path: 'intro',
        loadChildren: () =>
          import('./intro/intro.module').then((m) => m.IntroModule),
      },
      {
        path: 'success',
        loadChildren: () =>
          import('./success/success.module').then((m) => m.SuccessModule),
      },
      {
        path: 'stepper/:step',
        loadChildren: () =>
          import('./stepper/stepper.module').then((m) => m.StepperModule),
      },
      {
        path: '',
        redirectTo: '/assessment/intro',
        pathMatch: 'full',
      },
      {
        path: 'stepper',
        redirectTo: '/assessment/stepper/1',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentRoutingModule {}
