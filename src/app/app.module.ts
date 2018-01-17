import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { NgStyle } from '@angular/common';

import { AppComponent } from './app.component';
import { RbgsComponent } from './rbgs/rbgs.component';


@NgModule({
  declarations: [
    AppComponent,
    RbgsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
