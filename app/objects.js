if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) 
	{
		var c = {
			name: obj.name,
			greeting: obj.greeting,
			sayIt: fn
		}
		var fred = c.sayIt();
		return fred;
    },

    alterObjects : function(constructor, greeting) 
	{
		constructor.prototype.greeting = greeting;
		return constructor;
    },

    iterate : function(obj) 
	{
		var out_array = [];
		for (prop in obj) 
		{
			if (obj.hasOwnProperty(prop) && isNaN(prop)) 
			{
				out_array.push(prop + ': ' + obj[prop]);
			}
		}
		return out_array;
    }
  };
});
