$(document).ready(function() {

	var data = {
		resource_id: "9851b9fd-8a46-4268-9ece-4e45b143e8c9", // to change to a different dataset, change the resource_id
		limit: 50
	}

	$.ajax({
		url: "https://www.data.qld.gov.au/api/3/action/datastore_search", // if the dataset is coming from a different data portal, change the url (i.e. data.gov.au)
		data: data,
		dataType: "jsonp", // We use "jsonp" to ensure AJAX works correctly locally (otherwise XSS).
		cache: true,
		success: function(data) {
			iterateRecords(data);
		}
	});

	// var data = {
	// 	resource_id: '9eaeeceb-e8e3-49a1-928a-4df76b059c2d', // the resource id
	// 	limit: 50, // get 5 results
	// 	// q: 'jones' // query for 'jones'
	//   };
	//   $.ajax({
	// 	url: 'https://www.data.qld.gov.au/api/3/action/datastore_search',
	// 	data: data,
	// 	dataType: 'jsonp',
	// 	success: function(data) {
	// 		iterateRecords(data)
	// 	}
	//   });

});