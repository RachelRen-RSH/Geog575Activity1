// define a array that contains the city population and names
var cityPop = [
    {
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];
// create a table structure for the html and function use
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
for (var j = 0; j < 5; j++) {
    // table row creation
    var row = document.createElement("tr");
    tbl.appendChild(row);
}
body.appendChild(tbl);

// the function to add the content of the table created before
function addColumns(cityPop) {

    // loop for each row to add the content of each cell, when i equals to 0, it means it is the first row and the title of each column
    document.querySelectorAll("tr").forEach(function (row, i) {

        if (i == 0) {
            row.insertAdjacentHTML('beforeend', '<th>City</th>');
            row.insertAdjacentHTML('beforeend', '<th>Population</th>');
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        }
        // if it is not the first row, use the array created before to add the content for each cell
        else {

            var citySize;
            // define the level of the size of city based on the population
            if (cityPop[i - 1].population < 100000) {
                citySize = 'Small';

            } else if (cityPop[i - 1].population < 500000) {
                citySize = 'Medium';

            } else {
                citySize = 'Large';
            };

            row.insertAdjacentHTML('beforeend', '<td>' + cityPop[i - 1].city + '</td>');
            row.insertAdjacentHTML('beforeend', '<td>' + cityPop[i - 1].population + '</td>');
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        };
    });
};

// the function to change the color and add the effects for the web page
function addEvents() {
    // declare a function to change the style of the table so that when the mouse touch the table, it changes the style
    document.querySelector("table").addEventListener("mouseover", function () {

        var color = "rgb(";
        // define the color and use for loop to generate a random color
        for (var i = 0; i < 3; i++) {

            var random = Math.round(Math.random() * 255);

            color += random;

            if (i < 2) {
                color += ",";

            } else {
                color += ")";
            };
            // add the random color to the table
            document.querySelector("table").style.color = color;
        }
    })
    // declare a function to show an alert when clicking the table
    function clickme() {

        alert('Hey, you clicked me!');
    };
    document.querySelector("table").addEventListener("click", clickme)
};

// a new div part for showing the Geojson file
var body = document.getElementsByTagName("body")[0];
var div = document.createElement("div");
div.id = "mydiv";
body.appendChild(div);

//define the callback function
function callback(response) {
    console.log(response);
    // transform the json data into a readable form and load it to the page
    document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data: <br>' + JSON.stringify(response))
};

// get the geojson file and get the response object to the request, then calling the callback function 
function jsAjax() {
    fetch("data/MegaCities.geojson")
        .then(function (response) {
            return response.json();
        })
        .then(callback) // send the data to the callback function
};


// call the functions to show in the screen and perform 
addEvents();
window.onload = addColumns(cityPop);
window.onload = jsAjax();