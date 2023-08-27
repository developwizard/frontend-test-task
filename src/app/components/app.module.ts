import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppCardComponent} from './app-card/app-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {FilterPipe} from "../pipes/filter.pipe";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppCardComponent,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    FilterPipe,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
