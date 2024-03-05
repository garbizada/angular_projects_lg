import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfFirstComponent } from './ng-if-first/ng-if-first.component';
import { NgForFirstComponent } from './ng-for-first/ng-for-first.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfFirstComponent,
    NgForFirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
