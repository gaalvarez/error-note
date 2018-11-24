import { CoreModule } from './core/core.module';
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
import { OktaAuthModule } from '@okta/okta-angular';

// registerLocaleData(localeEs, 'es-Co', localeEsExtra);

const config = {
  issuer: 'https://dev-793918.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oahqw3zkv0or5H950h7'
};

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
    CoreModule,
    SimpleNotificationsModule.forRoot(),
    OktaAuthModule.initAuth(config)
  ],
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService },
    { provide: LOCALE_ID, useValue: 'en' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
