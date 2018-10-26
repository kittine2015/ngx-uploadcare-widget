import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UcWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
