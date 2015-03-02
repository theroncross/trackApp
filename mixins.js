function assignDefaults(defaults) {
	for (var prop in this) {
		if (this.hasOwnProperty(prop)) {
			if (this[prop] === undefined) {
				this[prop] = defaults[prop];
			}
		}
	}
}