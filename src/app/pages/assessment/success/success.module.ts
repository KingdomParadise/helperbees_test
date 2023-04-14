import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { SuccessRoutingModule } from './success-routing.module';

import { SuccessComponent } from './success.component';

@NgModule({
  imports: [CommonModule, SuccessRoutingModule, SharedModule],
  declarations: [SuccessComponent],
})
export class SuccessModule {}
