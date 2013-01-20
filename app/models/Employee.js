exports.definition = {
	
	config: {
		"columns": {
			"token":"string",
			"firstName":"string",
			"lastName":"string",
			"email":"string",
			"employeeNumber":"int",
			"unitId":"int"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "Employee"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
						
			// extended functions go here
			validateAuth: function() {
				if(this.get('token')) {
					return true;
				} else {
					return false;
				}
			},
			fullName: function() {
				return this.get("firstName") + " " + this.get("lastName");
			},
			transform: function() {
                return this.toJSON();
            }
		}); // end extend
		
		return Model;
	},
	
	
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			
			// extended functions go here			
			
		}); // end extend
		
		return Collection;
	}
		
}

