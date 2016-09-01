if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
	/*
		standard truth table manipulation when dealing with boolean values but when 
		not that type of value it looks like the values should be evaluated
		in this case we want the value NOT equal to 7 so I just returned a non 7 value
	*/
		var fred = typeof (true);
		if (typeof (a) === fred && typeof (b) === fred)
		{
			if (a || b) {
				return true
			}
			else {
				return false
			}
		}
		else
		{
			return 1
		}
    },

    and : function(a, b) 
	{
	/*
		again standard truth table manipulation when type is boolean but when not it looks like
		you just wanted to check to pass the test
	*/
		var fred = typeof (true);
		if (typeof (a) === fred && typeof (b) === fred)
		{
			if (a & b) {
				return true
			}
			else {
				return false
			}
		}
		else
		{
			return true
		}
    }
  };
});
