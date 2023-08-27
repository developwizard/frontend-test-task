import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppCardComponent} from './app-card/app-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {FilterPipe} from "../pipes/filter.pipe";
import {HttpClientModule} from "@angular/common/http";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppCardComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
    FilterPipe,
    HeaderComponent,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    ScrollingModule,
    SearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
