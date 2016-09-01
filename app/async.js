if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
		return new Promise(function(resolve, reject)
		{
			try
			{
				resolve("Stuff worked!");
			}
			catch (err)
			{
				reject("It broke");
			}
		})
    },

    manipulateRemoteData : function(url) {

    }
  };
});
