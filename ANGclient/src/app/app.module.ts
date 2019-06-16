/*
Imports
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { HttpClientModule } from '@angular/common/http';
  import { CookieService } from 'ngx-cookie-service';
  
  // Inner components
  import { AuthService } from "./services/auth/auth-service.service";
  import { ClickerService } from "./services/clicker/clicker-service.service";
  import { UtilsService } from './services/utils/utils-service.service';
  import { AppComponent } from './app.component';
  import { MainRouter } from './app.router';
  import { DataSharingService } from './services/data-sharing/data-sharing-service.service';

  // Inner modules
  import { HeaderModule } from "./components/header/module";
  import { FooterModule } from "./components/footer/module";
//


/* 
Definition
*/
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot( MainRouter, { onSameUrlNavigation: 'reload' } ),
      HttpClientModule,
      HeaderModule,
      FooterModule
    ],
    providers: [ 
      AuthService, 
      ClickerService, 
      UtilsService, 
      CookieService, 
      DataSharingService
    ],
    bootstrap: [ AppComponent ]
  })
//

/* 
Export
*/
  export class AppModule { }
//
