import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GlobalsModule } from '@angeeks/globals';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    GlobalsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
