/* a module for general global helper functions */
AppHelpers = (function() {
	var State       = {
		initialized     : false,
		listening 		: false,
	};

	/* Public */
	var Obj         = {
		settings 	: {},
		getState 	: function(param) {
			if (param) {
				return State[param];
			}

			console.error("no param set");
			return false;
		},
		setState 	: function(param, value) {
			if (param) {
				State[param] = value || State[param];
				return State[param];
			}

			console.log("no param selected");
			return false;
		},
		logState 	: function(param) {
			if (param) {
				console.log(State[param]);
				return self;
			}

			console.log(State);
			return this;
		},
		init 		: function(config, cb) {
			if (config && typeof(config) === 'object') {
				$.extend( Obj.settings, config);  // extend settings
			}

		  	this.setState('initialized', true);

		  	// do setup stuff.

			if (cb && typeof(cb) === 'function') { cb(); }
			return Obj;
		},


		// Example Public Method
		method		: function(cb) {

      			// do stuff

			if (cb && typeof(cb) === 'function') { cb(); }
			return Obj;
		}
	};

	return Obj;
})(); // end Module - call init in Doc Ready