import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { FormsModule } from '@angular/forms';
import { TertiaryComponent } from './tertiary/tertiary.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SecondaryComponent,
    TertiaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
