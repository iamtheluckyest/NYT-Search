/*
link to the API

*/

//--------------------Variables------------
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"

var apiKey = "c1bcc775e37c46ffa4f1a66092d6de7c"

var startDate; 

var endDate;

var searchTerm;

var numberRecords = 0;

function startDateConvert (startDate) {
	var myDate = startDate + "";
	myDate + "0101";
	return(myDate);
}

function endDateConvert (endDate) {
	var myDate = endDate + "";
	myDate + "1231";
	return(myDate);
}

function getQueryURL (startDate, endDate, searchTerm, numberRecords, url, apiKey) {
	var myURL = url;
	myURL = myURL + "api-key=" + apiKey + "&";
	myURL = myURL + "q=" + encodeURI(searchTerm) + "&";
	myURL = myURL + "q=" + startDate + "&";
	myURL = myURL + "q=" + endDate;
	return(myURL);
}

$("#submitButton").on("click", function(){
	startDate = $("#start-year").val(); 
	endDate	= $("#end-year").val();
	searchTerm = $("#search-term").val();
	numberRecords = $("number-records").val();
	startDate = startDateConvert(startDate);
	endDate = endDateConvert(endDate);

	$.ajax({
		url: queryURL,
		method: "GET"
	})	
})

