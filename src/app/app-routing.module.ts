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
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pages/pricing/pricing.module').then((m) => m.PricingModule),
  },
  { path: '', redirectTo: '/assessment/intro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
