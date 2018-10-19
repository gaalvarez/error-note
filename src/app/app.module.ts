import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from './core/logger/logger.service';
import { ConsoleLoggerService } from './core/logger/console-logger.service';
import { NotesModule } from './notes/notes.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotesModule
  ],
  providers: [{ provide: LoggerService, useClass: ConsoleLoggerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
