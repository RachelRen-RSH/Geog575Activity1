var body = document.getElementsByTagName("body")[0];
var div = document.createElement("div");
div.id = "mydiv";
body.appendChild(div);

function debugCallback(response) {
	console.log(response);
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data: <br>' + JSON.stringify(response))
};

function debugAjax() {

	var myData;

	fetch("data/MegaCities.geojson")
		.then(function (response) {
			//debugCallback(response);
			return response.json();
			// console.log("1111");

			// console.log(response);
			// myData = response;
		})
		.then(debugCallback)
	//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData))
};

window.onload = debugAjax();
//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
