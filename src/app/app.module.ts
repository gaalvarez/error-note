import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from './core/logger/logger.service';
import { ConsoleLoggerService } from './core/logger/console-logger.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnoteNavComponent } from './core/enote-nav/enote-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { registerLocaleData } from '@angular/common';
import localeEsExtra from '@angular/common/locales/extra/es';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es-Co', localeEsExtra);

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
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService },
    { provide: LOCALE_ID, useValue: 'en' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
