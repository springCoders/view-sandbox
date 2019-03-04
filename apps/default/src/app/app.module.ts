import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {SpanishLandingViewModule} from '@view-sandbox/spanish-landing-view';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule ,SpanishLandingViewModule, BrowserAnimationsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
