if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
/*
	I do question why you used an object called console when that is 
	kind of a reserved work when in web browsers
*/
  return {
    count : function (start, end) 
	{	
		var timeout; 
		function fred () 
		{ 
			console.log(start++); 
			if (start <= end) 
			{ 
				timeout = setTimeout(fred, 100); 
			} 
		} 
		fred(); 
		return { 
			cancel: function () 
			{ 
				timeout && clearTimeout(timeout); 
			} 
		}; 
    }
  };
});