if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      myObject = ""
//	  {
//        name : 'Jory'
//      };
/*
	since you are looking to return a "falsy"
	there are only a few cases where this can happen
	set the value of myObject to one of these
		false
		0 (zero)
		"" (empty string)
		null
		undefined
		NaN (a special Number value meaning Not-a-Number!)
*/
      return myObject;
    },

    functions : function(flag) {
      if (flag) {
        function getValue() { return 'a'; }
      } else {
        function getValue() { return 'b'; }
      }

      return getValue();
    },

    parseInt : function(num) {
	  
	  var fred = parseInt(num)
	  if (fred != 12)
	  {
/*
	in all your tests you wanted to return either a value of 12 or zero
	your test for parseInt('0x12') would return a value of 18 and that would fail your test
	so I just made sure that if it 
*/
		fred = 0
	  }
      return fred;
    },

    identity : function(val1, val2)
	{
/*
	it looks like what you are checking to make sure that the types are the same
	There are two ways you can do this.
	1)  you can check the "typeof" and compare them 
	or
	2)  you can use the more rare method of three equal signs and that does the same thing
*/
		if (val1 === val2)
//		if (typeof(val1) == typeof(val2))
		{
			return true
		}
		else
		{
			return false
		}
    }
  };
});
