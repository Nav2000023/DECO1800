function getYear(year) {
	if(year) {
		return year.match(/[\d]{4}/); // This is regex (https://en.wikipedia.org/wiki/Regular_expression)
	}
}

function iterateRecords(data) {

	console.log(data);

	$.each(data.result.records, function(recordKey, recordValue) {

		var recordTitle = recordValue["dc:title"];
		var recordYear = getYear(recordValue["dcterms:temporal"]);
		var recordImage = recordValue["150_pixel_jpg"];
		var recordDescription = recordValue["dc:description"];

		console.log(recordYear); // logs the year of the record

		if (recordYear == "1915") { // if the year is 1915, then...

			if(recordTitle && recordYear && recordImage && recordDescription) { 

				$("#records").append(
					$('<section class="record">').append(
						$('<h2>').text(recordTitle),
						$('<h3>').text(recordYear),
						$('<img>').attr("src", recordImage),
						$('<p>').text(recordDescription)
					)
				);

			}

		}

	});

}

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