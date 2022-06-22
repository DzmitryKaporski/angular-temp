import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpoilerComponent } from './spoiler/spoiler.component';
import { SpoilerItemComponent } from './spoiler-item/spoiler-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SpoilerComponent,
    SpoilerItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
