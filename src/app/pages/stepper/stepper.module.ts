import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { StepperRoutingModule } from './stepper-routing.module';

import { StepperComponent } from './stepper.component';

@NgModule({
  imports: [CommonModule, StepperRoutingModule, SharedModule],
  declarations: [StepperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StepperModule {}
