if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) 
	{	
		function sleepFor(sleepDuration)
		{
			var now = new Date().getTime();
			while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
		}
		for (i = start; i < end; i++)
		{
			sleepFor(100);
		}
    }
  };
});