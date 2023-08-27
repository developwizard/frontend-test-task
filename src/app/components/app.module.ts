import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppCardComponent} from './app-card/app-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {FilterPipe} from "../pipes/filter.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './header/header.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppCardComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    FilterPipe,
    HeaderComponent,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    ScrollingModule,
    MatButtonToggleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
