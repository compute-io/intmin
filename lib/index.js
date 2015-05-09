'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );


// CONSTANTS //

var TYPES = {};

TYPES.int8 = require( 'compute-const-min-int8' );
TYPES.int16 = require( 'compute-const-min-int16' );
TYPES.int32 = require( 'compute-const-min-int32' );
TYPES.uint8 = 0;
TYPES.uint16 = 0;
TYPES.uint32 = 0;


// INTMIN //

/**
* FUNCTION: intmin( [type] )
*	Returns the minimum value of a specified integer type.
*
* @param {String} [type="int32"] - integer type
* @returns {Number} minimum integer value
*/
function intmin( type ) {
	if ( !arguments.length ) {
		return TYPES.int32;
	}
	if ( !isString( type ) ) {
		throw new TypeError( 'intmin()::invalid input argument. Must provide an input string. Value: `' + type + '`.' );
	}
	if ( !TYPES.hasOwnProperty( type ) ) {
		throw new Error( 'intmin()::invalid input argument. Unrecognized integer type. Must be one of the following: \"' + Object.keys( TYPES ).join( '\", \"' ) + '\". Value: `' + type + '`.' );
	}
	return TYPES[ type ];
} // end FUNCTION intmin()


// EXPORTS //

module.exports = intmin;
