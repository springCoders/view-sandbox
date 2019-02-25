import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {SpanishLandingViewModule} from '@view-sandbox/spanish-landing-view'
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule ,SpanishLandingViewModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
