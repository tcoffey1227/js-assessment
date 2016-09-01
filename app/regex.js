if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		var re = new RegExp("[0-9]")
		return re.test(str);
    },

    containsRepeatingLetter : function(str) 
	{
		var re = new RegExp(/([a-zA-Z]).*?\1/)
		return re.test(str);
    },

    endsWithVowel : function(str) {
		var re = new RegExp(/[aeiou]$/ig)
		return re.test(str);
    },

    captureThreeNumbers : function(str) {
		var re = new RegExp(/[0-9]{3}/g)
		var fred = re.exec(str);
		if (fred)
		{
			fred = fred.join()
		}
		else
		{
			fred = false;
		}
		return fred;
    },

    matchesPattern : function(str) {
		/*
			pattern to match = XXX - XXX - XXXX
		*/
		
		var re = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
		return re.test(str);
    },
    isUSD : function(str) {
    /*
        pattern to match = $999,999.00
        but not an exact match
    */

    var re = new RegExp(/^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$/)
    return re.test(str);
    }
  };
});
