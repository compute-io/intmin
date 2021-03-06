/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	intmin = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-intmin', function tests() {

	it( 'should export a function', function test() {
		expect( intmin ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a string primitive', function test() {
		var values = [
			new String( 'int8' ),
			5,
			null,
			undefined,
			NaN,
			true,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				intmin( value );
			};
		}
	});

	it( 'should throw an error if provided an unknown integer type', function test() {
		var values = [
			'int64',
			'uint64',
			'float32',
			'float64',
			'single',
			'double'
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				intmin( value );
			};
		}
	});

	it( 'should return a number', function test() {
		var values = [
			'int8',
			'uint8',
			'int16',
			'uint16',
			'int32',
			'uint32'
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isNumber( intmin( values[ i ] ) );
		}
	});

	it( 'should return the minimum value for `int32` by default', function test() {
		assert.strictEqual( intmin(), intmin( 'int32' ) );
	});

});
