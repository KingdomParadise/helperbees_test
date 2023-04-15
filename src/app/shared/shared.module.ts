import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { ProgressBarComponent } from './components/blocks/progress-bar/progress-bar.component';
import { StepperProgressBarComponent } from './components/blocks/stepper-progress-bar/stepper-progress-bar.component';

// Layouts
import { LayoutHeaderComponent } from './components/layouts/layout-header/layout-header.component';
import { PageLayoutComponent } from './components/layouts/page-layout/page-layout.component';
import { LayoutFooterComponent } from './components/layouts/layout-footer/layout-footer.component';
import { LayoutNavbarComponent } from './components/layouts/layout-navbar/layout-navbar.component';
import { BreadscrumbComponent } from './components/layouts/breadscrumb/breadscrumb.component';
import { FaqComponent } from './components/blocks/faq/faq.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [
    LayoutHeaderComponent,
    PageLayoutComponent,

    ProgressBarComponent,
    StepperProgressBarComponent,
    LayoutFooterComponent,
    LayoutNavbarComponent,
    BreadscrumbComponent,
    FaqComponent,
  ],
  exports: [
    CommonModule,
    RouterModule,

    LayoutHeaderComponent,
    PageLayoutComponent,

    ProgressBarComponent,
    StepperProgressBarComponent,
    LayoutFooterComponent,
    LayoutNavbarComponent,
    BreadscrumbComponent,
    FaqComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class SharedModule {}
