import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from './core/logger/logger.service';
import { ConsoleLoggerService } from './core/logger/console-logger.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnoteNavComponent } from './core/enote-nav/enote-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';


@NgModule({
  declarations: [
    AppComponent,
    EnoteNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [{ provide: LoggerService, useClass: ConsoleLoggerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
