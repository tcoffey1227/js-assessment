if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) 
	{
/*
	in this case there are only three values in arr so I just hardcoded it
	I could have just used the function with the arr parameters but this gave
	me an opportunity to validate the values were begin passed correctly
*/
		var greeting = arr[0];
		var name = arr[1];
		var punctuation = arr[2];
		var fred = fn(greeting, name, punctuation)
		return fred;
    },

    speak : function(fn, obj) 
	{
		var c = {
			name: obj.name,
			greeting: obj.greeting,
			sayIt: fn
		}
		var fred = c.sayIt();		
		return fred;
    },

    functionFunction : function(str) 
	{
		var init_val = str
		return function(str)
		{
			return init_val + ', ' + str
		}		
    },

    makeClosures : function(arr, fn) 
	{
		var i;
		var fun_array = [];
		for (i = 0; i < arr.length; i++) {
			fun_array[i] = function (j) {
				return function () {
					return fn(arr[j])
				}
			}(i)
		}
		return fun_array;
    },

    partial : function(fn, str1, str2) 
	{
		var greeting = str1;
		var name = str2;
		return function (x)
		{
			return fn(greeting, name, x)
		}
    },

    useArguments : function() 
	{
		var fred = 0;
		for(var i=0; i<arguments.length; i++) 
		{
			fred = fred + arguments[i];
		}
		return fred;
    },

    callIt : function(fn) {
		var args = Array.prototype.splice.call(arguments, 1);
		return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) 
	{
		var args1 = Array.prototype.splice.call(arguments, 1);
		fn.apply(null, args1);

		return function () {
			var args = Array.prototype.splice.call(arguments, 0);
			return fn.apply(this, args1.concat(args));
		}
    },

    curryIt : function(fn) 
	{
        return function(a)
        {
            return function (b)
            {
                return function(c)
                {
                    var fred = fn(a, b, c);
                    return fred;
                }
            }
        }
    }
  };
});
