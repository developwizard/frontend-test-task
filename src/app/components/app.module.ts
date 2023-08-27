import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {CardsContainerComponent} from './cards-container/cards-container.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CardsContainerComponent,
    HeaderComponent,
    HttpClientModule,
    SearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
