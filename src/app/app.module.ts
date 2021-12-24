import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentNavigatorComponent } from './resident-navigator/resident-navigator.component';
import { residentService } from './Services/residentService';
@NgModule({
  declarations: [
    AppComponent,
    ResidentNavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [residentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
