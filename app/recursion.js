if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) 
	{
		data = arguments[0];
		dirn = "";
		if (arguments.length > 1)
		{
			dirn = arguments[1];
		}

		var flist = [];
		function getKeys(obj, val) {
			var objects = [];
			for (var i in obj) {
				if (!obj.hasOwnProperty(i)) continue;
				if (typeof obj[i] == 'object') {
					objects = objects.concat(getKeys(obj[i], val));
				} else if (obj[i] == val) {
					objects.push(obj.files);
				}
			}
			return objects;
		}

		function traverse_thisnode(obj)
		{
			for (var prop in obj)
			{
				for (var i = 0; i < obj[prop].length; i++) {
					if (typeof obj[prop][i] != 'object')
					{
						if (prop != 'dir')
						{
							flist.push(obj[prop][i]);
						}
					}
					else {
						traverse_thisnode(obj[prop][i]);
					}
				}
			}
			return flist
		}

		function traverse_it(obj)
		{
			for (var prop in obj) 
			{
				if (prop == 'files')
				{
					if (typeof obj[prop] == 'object') 
					{
						// object
						for (var i = 0; i < obj[prop].length; i++)
						{
							if (typeof obj[prop][i] != 'object')
							{
								flist.push(obj[prop][i]);
							}
							else
							{
								traverse_it(obj[prop][i]);
							}
						}
					}
				}
			}
			return flist
		}
		if (dirn == "")
		{
			var fred = traverse_it(data)
		}
		else
		{
			var the_node = getKeys(data, dirn)
			var fred = traverse_thisnode(the_node);
		}
		return fred;
    },

    permute: function(arr) 
	{
	/*
		even though we are only using 4 elements for the permutaion this 
		should work for any length.
		I use the variable a_l to know how many to iterate over
	*/
		var results = [];
		var a_l = arr.length;
		var used = Array(a_l); 
		var data = Array(a_l); 

		function backtracking(pos) {
			if (pos == a_l)
			{
				return results.push(data.slice());
			}
			for (var i = 0; i < a_l; ++i)
			{
				if (!used[i])
				{ 
					used[i] = true;      
					data[pos] = arr[i];  
					backtracking(pos + 1);
					used[i] = false;     
				}
			}
		};
		backtracking(0);
		return results;
    }
  };
});
