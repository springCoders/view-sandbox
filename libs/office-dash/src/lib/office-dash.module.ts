import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import * as Hammer from 'hammerjs';
import 'hammerjs';
// import { enableProdMode } from '@angular/core';
import {
  MatCheckboxModule,
  MatSlideToggleModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { CarouselComponent,CarouselItemElement } from './components/carousel/carousel.component';
import { CarouselItemDirective } from  './components/carousel/carousel-item.directive';
import { FormsModule } from '@angular/forms';

 


@NgModule({
  imports: [CommonModule,
    FlexLayoutModule,
    FormsModule,
    BrowserModule, 
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule, 
    BrowserAnimationsModule,
    NgxHmCarouselModule,
    MatCheckboxModule,
  MatButtonModule,
  MatSlideToggleModule
  ],
  declarations: [
    HomeComponent, 
    HeaderComponent, 
    FooterComponent,
    CarouselComponent,
    CarouselItemElement,
    CarouselItemDirective, 
    
  ],
  exports: [
    HomeComponent
  ]
})



export class OfficeDashModule {}
 