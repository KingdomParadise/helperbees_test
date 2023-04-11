import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { FinalRoutingModule } from './final-routing.module';

import { FinalComponent } from './final.component';

@NgModule({
  imports: [CommonModule, FinalRoutingModule, SharedModule],
  declarations: [FinalComponent],
})
export class FinalModule {}
