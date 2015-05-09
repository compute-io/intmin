'use strict';

var intmin = require( './../lib' );

// int32 (default):
console.log( 'int32 (default): %d', intmin() );

// int8:
console.log( 'int8: %d', intmin( 'int8' ) );

// int16:
console.log( 'int16: %d', intmin( 'int16' ) );

// int32:
console.log( 'int32: %d', intmin( 'int32' ) );

// uint8:
console.log( 'uint8: %d', intmin( 'uint8' ) );

// uint16:
console.log( 'uint16: %d', intmin( 'uint16' ) );

// uint32:
console.log( 'uint32: %d', intmin( 'uint32' ) );
