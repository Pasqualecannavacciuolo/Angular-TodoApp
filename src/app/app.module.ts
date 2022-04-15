import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { ListComponent } from './list/list.component';

import { HttpClientModule } from '@angular/common/http';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListComponent,
    InsertFormComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

}
