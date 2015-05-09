intmin
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns the minimum value of a specified integer type.


## Installation

``` bash
$ npm install compute-intmin
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var intmin = require( 'compute-intmin' );
```

#### intmin( [type] )

Returns the minimum value of a specified `integer` type.

``` javascript
var min = intmin( 'int8' );
// returns -128
```

The following `integer` types are supported:

* 	__int8__: signed 8-bit integer
*	__uint8__: unsigned 8-bit integer
*	__int16__: signed 16-bit integer
*	__uint16__: unsigned 16-bit integer
*	__int32__: signed 32-bit integer
*	__uint32__: unsigned 32-bit integer

If not provided an integer `type`, the function returns the minimum signed 32-bit integer.

``` javascript
intmin() === intmin( 'int32' );
// returns true
```


## Examples

``` javascript
var intmin = require( 'compute-intmin' ),
	min;

// int32 (default):
min = intmin();
// returns -2147483648

// int8:
min = intmin( 'int8' );
// returns -128

// int16:
min = intmin( 'int16' );
// returns -32768

// int32:
min = intmin( 'int32' );
// returns -2147483648

// uint8:
min = intmin( 'uint8' );
// returns 0

// uint16:
min = intmin( 'uint16' );
// returns 0

// uint32:
min = intmin( 'uint32' );
// returns 0
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-intmin.svg
[npm-url]: https://npmjs.org/package/compute-intmin

[travis-image]: http://img.shields.io/travis/compute-io/intmin/master.svg
[travis-url]: https://travis-ci.org/compute-io/intmin

[coveralls-image]: https://img.shields.io/coveralls/compute-io/intmin/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/intmin?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/intmin.svg
[dependencies-url]: https://david-dm.org/compute-io/intmin

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/intmin.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/intmin

[github-issues-image]: http://img.shields.io/github/issues/compute-io/intmin.svg
[github-issues-url]: https://github.com/compute-io/intmin/issues
