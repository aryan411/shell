import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenService } from 'auth-guards';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [TokenService],
  bootstrap: [AppComponent],
})
export class AppModule {}
