import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChafafComponentsModule } from 'chafaf-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChafafComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
