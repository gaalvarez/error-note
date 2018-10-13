import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export let isDebugMode = environment.debugMode;

const noop = (): any => undefined;

@Injectable({
  providedIn: 'root'
})
export class ConsoleLoggerService {

  get info() {
    if (isDebugMode) {
      return console.log.bind(console);
    } else {
      return noop;
    }
  }

  get warn() {
    if (isDebugMode) {
      return console.warn.bind(console);
    } else {
      return noop;
    }
  }

  get error() {
    if (isDebugMode) {
      return console.error.bind(console);
    } else {
      return noop;
    }
  }

  invokeConsoleMethod(type: string, args?: any): void {
    const logFn: Function = (console)[type] || console.log || noop;
    logFn.apply(console, [args]);
  }
}
