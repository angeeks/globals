import { Inject, Injectable } from '@angular/core';
import { windowToken } from './window.token';

@Injectable({
  providedIn: 'root'
})
export class Globals {
  window: Window;
  [key: string]: any;
  constructor(@Inject(windowToken) wnd: any) {
    Object.keys(wnd).forEach(k => {
      this[k] = wnd[k];
    });
    if (!this.window) {
      this.window = wnd;
    }
  }
}
