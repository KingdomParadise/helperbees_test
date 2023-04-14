import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PricingComponent } from './pricing.component';

@NgModule({
  declarations: [PricingComponent],
  imports: [CommonModule, PricingRoutingModule, SharedModule],
})
export class PricingModule {}
