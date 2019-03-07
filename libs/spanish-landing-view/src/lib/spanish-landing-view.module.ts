import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {LayoutModule} from '@angular/cdk/layout';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
MatInputModule,MatTabsModule,LayoutModule,MatCardModule,MatChipsModule,

 
  ],
  declarations: [MainComponent, HeaderComponent, FooterComponent],
  exports:[MainComponent]
})
export class SpanishLandingViewModule {}
