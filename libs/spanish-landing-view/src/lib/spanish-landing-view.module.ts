import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [MainComponent],
  exports:[MainComponent]
})
export class SpanishLandingViewModule {}
