import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { FormsModule } from '@angular/forms';
import { TertiaryComponent } from './tertiary/tertiary.component';
import { Directive1Directive } from './directive/directive-1.directive';
import { DirectiveDirective } from './directive/directive.directive';
import { PipeComponentPipe } from './pipe/pipe-component.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SecondaryComponent,
    TertiaryComponent,
    DirectiveDirective,
    Directive1Directive,
    PipeComponentPipe
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
