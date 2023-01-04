import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Components
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import {
  ContentComponent,
  ContentOneComponent,
  ContentTwoComponent,
  ContentThreeComponent
} from './content';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Material Components
    MatExpansionModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
