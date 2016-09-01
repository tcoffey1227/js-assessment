if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
		// Shifting the 1 for bit-1 bits
		constant = 1 << (bit-1);
		// if the bit is set, return 1
		if( num & constant ){
			return 1;
		}
		// If the bit is not set, return 0
		return 0;
    },

    base10: function(str) {
		return  parseInt(str, 2);
    },

    convertToBinary: function(num) 
	{
	/*
		we can not use simple 
		num.toString(2)
		because we always want 8 characters
	*/
	    var out = "";
		var length = 8;
		while (length--)
			out += (num >> length) & 1;
		return out;
    },

    multiply: function(a, b) {
		return (a * 10) * (b * 10) / (10 * 10)
    }
  };
});

