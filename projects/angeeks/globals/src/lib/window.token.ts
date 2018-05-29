import { Inject, InjectionToken, Injectable } from '@angular/core';

function windowFactory() {
  return window;
}

export const windowToken = new InjectionToken<Window>('windowToken', {
  providedIn: 'root',
  factory: windowFactory
});
