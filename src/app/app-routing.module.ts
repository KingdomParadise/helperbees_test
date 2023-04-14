import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'assessment',
    loadChildren: () =>
      import('./pages/assessment/assessment.module').then(
        (m) => m.AssessmentModule
      ),
  },
  { path: '', redirectTo: '/assessment/intro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
