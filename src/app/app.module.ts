import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './Account/login/login.component';
import { RigisterComponent } from './Account/rigister/rigister.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarComponent,
    LoginComponent,
    RigisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
