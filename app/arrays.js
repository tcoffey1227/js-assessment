if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		return arr.indexOf(item)
    },

    sum : function(arr) {
		var fred = 0;
		for (i = 0; i < arr.length; i++) 
		{
			fred += arr[i];
		}
		return fred
    },

    remove : function(arr, item) {
/*
	if we were only going to remove one instance in the array we could use the splice
	but since we do not actually know the number of occurrances we iterate thru the array
*/
		for(var i = arr.length; i--;)
		{
			if (arr[i] == item) 
			{
				arr.splice(i, 1);
			}
		}
		return arr;
    },

    removeWithoutCopy : function(arr, item) {
/*
		not sure what you are really wanting to do here
		as far as I can tell it looks like the same thing as the remove since 
		you want to have 1 3 4 returned
*/
		for(var i = arr.length; i--;)
		{
			if (arr[i] == item) 
			{
				arr.splice(i, 1);
			}
		}
		return arr;
    },

    append : function(arr, item) {
		arr.push(item)
		return arr;
    },

    truncate : function(arr) {
		arr.splice(-1,1);
		return arr;
    },

    prepend : function(arr, item) {
		arr.unshift(item);
		return arr;
    },

    curtail : function(arr) {
		arr.shift();
		return arr;
    },

    concat : function(arr1, arr2) {
		return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
		arr.splice(index,0,item);
		return arr;
    },

    count : function(arr, item) 
	{
		var fred = 	arr.filter(function(value)
				{
					return value == item;
				}).length;

		return fred;
    },

    duplicates : function(arr) 
	{
/*
	a little more thinking had to be done on this one.
	I used the counts object to store the number of time I found the item
	and if the number was 2 or more then I put that into my new array and returned that one
*/	
		var dups_array = [];
		var counts = {};

		for (var i = 0; i < arr.length; i++) 
		{
			var item = arr[i];
			counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
			if (counts[item] === 2) 
			{
				dups_array.push(item);
			}
		}
		return dups_array;
    },

    square : function(arr) 
	{
		var sqr_array = [];
		for (var i = 0; i < arr.length; i++)
		{
			sqr_array.push(Math.pow(arr[i], 2))
		}
		return sqr_array;
    },

    findAllOccurrences : function(arr, target) 
	{
		idx_array = [];
		for (i = 0; i < arr.length; i++)
		{
			if (arr[i] === target)
			{
				idx_array.push(i);
			}
		}
		return idx_array;
    }
  };
});
