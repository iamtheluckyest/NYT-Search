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

function getQueryURL (startDate, endDate, searchTerm, url, apiKey) {
	var myURL = url;
	myURL = myURL + "api-key=" + apiKey + "&";
	if(searchTerm){
		myURL = myURL + "q=" + encodeURI(searchTerm);
		if(startDate){
			myURL + "&";
		}
	}
	if(startDate){
		myURL = myURL + "begin_date=" + startDate;
		if(endDate){
			myURL + "&";
		}
	}
	if(endDate){
		myURL = myURL + "end_date=" + endDate;
	}
	return(myURL);
}

$("#clearButton").on("click", function(){
	alert("hey");
})

$("#submitButton").on("click", function(event){
	event.preventDefault();
	startDate = $("#start-year").val(); 
	endDate	= $("#end-year").val();
	searchTerm = $("#search-term").val();
	numberRecords = $("#number-records option:selected").text();
	startDate = startDateConvert(startDate);
	endDate = endDateConvert(endDate);
	console.log(numberRecords)
	var myURL = getQueryURL(startDate, endDate, searchTerm, queryURL, apiKey)
	console.log(myURL)
	$.ajax({
		url: myURL,
		method: "GET"
	}).done(function(response){
		console.log(response);
	})
})
