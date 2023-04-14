import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { IntroRoutingModule } from './intro-routing.module';

import { IntroComponent } from './intro.component';

@NgModule({
  imports: [CommonModule, IntroRoutingModule, SharedModule],
  declarations: [IntroComponent],
})
export class IntroModule {}
