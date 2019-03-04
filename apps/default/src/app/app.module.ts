import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {SpanishLandingViewModule} from '@view-sandbox/spanish-landing-view';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule ,SpanishLandingViewModule, BrowserAnimationsModule ,MatIconModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
