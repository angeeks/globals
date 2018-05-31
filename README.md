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
    GlobalsModule
  ]
})
```

That's it, now you can use globals in as injectables.

```
import { Globals } from '@angkees/globals';
class AppComponent {
  constructor(g: Globals) {
    g.window.open('http://google.com', 'blank');
    g.console.log(g.document.body);
    g.localStorage.set('key', 'value');
  }
}
```

# Advanced Usage

## :construction: Inject customed symbols


```
import { GlobalsModule, windowToken } from '@angkees/g';

@NgModule({
  imports: [
    ...,
    GlobalsModule
  ],
  providers: [
    { provide: windowToken, useValue: { window: 'for test' } }
  ]
})
```