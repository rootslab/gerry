###Gerry

[![CODECLIMATE](http://img.shields.io/codeclimate/github/rootslab/gerry.svg?style=flat)](https://codeclimate.com/github/rootslab/gerry)
[![CODECLIMATE-TEST-COVERAGE](http://img.shields.io/codeclimate/coverage/github/rootslab/gerry.svg?style=flat)](https://codeclimate.com/github/rootslab/gerry)

[![LICENSE](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/rootslab/gerry#mit-license)
[![GITTIP](http://img.shields.io/gittip/rootslab.svg?style=flat)](https://www.gittip.com/rootslab/)
[![NPM DOWNLOADS](http://img.shields.io/npm/dm/gerry.svg?style=flat)](http://npm-stat.com/charts.html?package=gerry)

[![NPM VERSION](http://img.shields.io/npm/v/gerry.svg?style=flat)](https://www.npmjs.org/package/gerry)
[![TRAVIS CI BUILD](http://img.shields.io/travis/rootslab/gerry.svg?style=flat)](http://travis-ci.org/rootslab/gerry)
[![BUILD STATUS](http://img.shields.io/david/rootslab/gerry.svg?style=flat)](https://david-dm.org/rootslab/gerry)
[![DEVDEPENDENCY STATUS](http://img.shields.io/david/dev/rootslab/gerry.svg?style=flat)](https://david-dm.org/rootslab/gerry#info=devDependencies)

[![NPM GRAPH1](https://nodei.co/npm-dl/gerry.png)](https://nodei.co/npm/gerry/)

[![NPM GRAPH2](https://nodei.co/npm/gerry.png?downloads=true&stars=true)](https://nodei.co/npm/gerry/)

> **_Gerry_**, a tiny module for event logging.

###Install

```bash
$ npm install gerry [-g]
```

> __require__:

```javascript
var Gerry  = require( 'gerry' );
```

###Run Tests

```bash
$ cd gerry/
$ npm test
```

###Constructor

> Arguments within [ ] are optional.

```javascript
Gerry( EventEmitter emt [, Array evt_names [, Function logger ] ] )
// or
new Gerry( EventEmitter emt [, Array evt_names [, Function logger ] ] )
```

###Properties

```javascript

/*
 * Current emitter to listen.
 */
Gerry.emt : EventEmitter

/*
 * List of event names to log/save.
 */
Gerry.events : Array

/*
 * Array of event listeners.
 */
Gerry.listeners : Array

/*
 * The logger function, for default it outputs to console.
 */
Gerry.lfn : Function

/*
 * An obj/hash containing The list of collected event names and arguments.
 * { events : [ .. ], args : [ .. ] }
 */
Gerry.collected : Object
```

###Methods

> Arguments within [ ] are optional.

```javascript
/*
 * Enable event logging by adding all events listeners.
 */
Gerry#enable = function ( [ Boolean collect_events [, Function logger ] ] ) :

/*
 * Disable event logging by removing all events listeners.
 */
Gerry#disable = function ( [ Function logger ] ) :

/*
 * Update/push event names, a name is added if not already exists in the list.
 */
Gerry#push = function ( [ Boolean collect_events [, Array evt_names | String evt_name_1 [, ..String evt_name_N.. ] ] ] ) : Number

/*
 * Return the current list length.
 */
Gerry#size = function () : Number

/*
 * Flush event names and listeners.
 */
Gerry#flush = function () : Cucu
```

### MIT License

> Copyright (c) 2014 &lt; Guglielmo Ferri : 44gatti@gmail.com &gt;

> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:

> __The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.__

> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.