import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { ProgressBarComponent } from './components/blocks/progress-bar/progress-bar.component';
import { StepperProgressBarComponent } from './components/blocks/stepper-progress-bar/stepper-progress-bar.component';

// Layouts
import { LayoutHeaderComponent } from './components/layouts/layout-header/layout-header.component';
import { PageLayoutComponent } from './components/layouts/page-layout/page-layout.component';
import { LayoutFooterComponent } from './components/layouts/layout-footer/layout-footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LayoutHeaderComponent,
    PageLayoutComponent,

    ProgressBarComponent,
    StepperProgressBarComponent,
    LayoutFooterComponent,
  ],
  exports: [
    CommonModule,
    RouterModule,

    LayoutHeaderComponent,
    PageLayoutComponent,

    ProgressBarComponent,
    StepperProgressBarComponent,
    LayoutFooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class SharedModule {}
