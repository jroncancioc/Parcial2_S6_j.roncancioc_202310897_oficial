import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlineModule } from './airline/airline.module';  // Importa el módulo de aerolíneas

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AirlineModule,
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
