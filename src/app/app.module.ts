import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeoresModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { NarutoModule } from './naruto/naruto.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeoresModule,
    ContadorModule,
    NarutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
