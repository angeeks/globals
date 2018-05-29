# Globals

[![Build Status](https://travis-ci.org/angeeks/globals.svg?branch=master)](https://travis-ci.org/angeeks/globals)
[![npm version](https://badge.fury.io/js/%40angeeks%2Ftesting.svg)](https://www.npmjs.com/package/@angeeks/globals)

A small useful piece for globals seperation.

# Installation

```
  npm i -P @angeeks/globals
```

# :construction: Usage

```
import { GlobalsModule } from '@angkees/globals';

@NgModule({
  imports: [
    ...,
    GlobalsModule.forPlatform('browser')
  ]
})
```

That's it, now you can use globals in as injectables.

```
import { Globals } from '@angkees/globals';
class AppComponent {
  constructor(globals: Globals) {
    globals.window.open('http://google.com', 'blank');
    globals.localStorage.set('key', 'value');
  }
}
```

# Advanced Usage

## :construction: Inject only required symbols

```
import { GlobalsModule, GlobalSymbol } from '@angkees/globals';

@NgModule({
  imports: [
    ...,
    GlobalsModule.forRoot([
      GlobalSymbol.document,
      GlobalSymbol.window
    ])
  ]
})
```

## :construction: Inject customed symbols


```
import { GlobalsModule, GlobalToken } from '@angkees/globals';

@NgModule({
  imports: [
    ...,
    GlobalsModule.forRoot()
  ],
  providers: [
    { provide: GlobalToken.window, useValue: { window: 'for test' } }
  ]
})
```

## :construction: Testability

Provide common global apis for tests.

```
import { GlobalsTestingModule } from '@angkees/globals/testing';

@NgModule({
  imports: [
    ...,
    GlobalsTestingModule.forPlatform('browser')
  ],
  providers: [
    { provide: GlobalTestingModule.window, useValue: { window: 'for test' } }
  ]
})
```
