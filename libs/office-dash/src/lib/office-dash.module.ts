import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  exports: [HomeComponent]
})
export class OfficeDashModule {}
