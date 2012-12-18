exports.definition = {
	
	config: {
		"columns": {
			"date":"date",
			"projectCode":"string",
			"currency":"string",
			"amount":"float",
			"remarks":"string",
			"expenseTypeId":"int",
			"expenseLocationId":"int"
		},
		"defaults": {
            "date": new Date(),
            "projectCode": "",
            "currency": "EUR",
            "amount": "",
            "remarks": "",
            "expenseTypeId": 1,
            "expenseLocationId": 1
        },
		"adapter": {
			"type": "sql",
			"collection_name": "Expenses"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
						
			// extended functions go here
			transform: function() {
                var t = this.toJSON();
                var types = [ 'Hotel', 'Lunch', 'Diner', 'Ticket', 'Restaurant', 'Other (Please specify)' ];
                
                t.expenseLocationIcon = t.expenseLocationId === 1 ? '/images/glyphish/53-house.png' : t.expenseLocationId === 2 ? '/images/glyphish/38-airplane.png' : '/images/glyphish/21-skull.png';
                t.expenseType = types[t.expenseTypeId -1];
                
 				return t;               
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

