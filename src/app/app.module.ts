import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopcomponentComponent } from './topcomponent/topcomponent.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { CreatecomponentComponent } from './createcomponent/createcomponent.component';
import { TutorialcomponentComponent } from './tutorialcomponent/tutorialcomponent.component';
import { LowercomponentComponent } from './lowercomponent/lowercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TopcomponentComponent,
    NavbarComponentComponent,
    CreatecomponentComponent,
    TutorialcomponentComponent,
    LowercomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
