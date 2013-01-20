migration.up = function(db) {
	db.createTable({
		"columns": {
			"token":"string",
			"firstName":"string",
			"lastName":"string",
			"email":"string",
			"password":"string",
			"unitId":"tinyint",
			"employeeNumber":"integer"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "Employee"
		}
	});
};

migration.down = function(db) {
	db.dropTable("Employee");
};
