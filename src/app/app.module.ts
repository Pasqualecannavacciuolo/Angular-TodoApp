import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
