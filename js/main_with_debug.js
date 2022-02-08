
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
///////////////////////////// create a table ////////////////////////
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
for (var j = 0; j < 5; j++) {
    // table row creation
    var row = document.createElement("tr");
    tbl.appendChild(row);
    console.log("eadxqerxq");
}
body.appendChild(tbl);
/////////////////////////////////////////////////////////////////////

function addColumns(cityPop) {
    console.log("wdef");

    document.querySelectorAll("tr").forEach(function (row, i) {
        console.log("zheli");
        if (i == 0) {
            row.insertAdjacentHTML('beforeend', '<th>City</th>');
            row.insertAdjacentHTML('beforeend', '<th>Population</th>');
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            console.log("wheircnhwicnrhjwinctjhir");
            var citySize;

            if (cityPop[i - 1].population < 100000) {
                citySize = 'Small';

            } else if (cityPop[i - 1].population < 500000) {
                citySize = 'Medium';

            } else {
                citySize = 'Large';
            };
            console.log(citySize);
            row.insertAdjacentHTML('beforeend', '<td>' + cityPop[i - 1].city + '</td>');
            row.insertAdjacentHTML('beforeend', '<td>' + cityPop[i - 1].population + '</td>');
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        };
    });
};

function addEvents() {

    document.querySelector("table").addEventListener("mouseover", function () {
        console.log("qqqqqqqqqqqqqqq");
        var color = "rgb(";

        for (var i = 0; i < 3; i++) {

            var random = Math.round(Math.random() * 255);

            color += random;

            if (i < 2) {
                color += ",";

            } else {
                color += ")";
            };

            document.querySelector("table").style.color = color;
        }
    })

    function clickme() {

        alert('Hey, you clicked me!');
    };
    document.querySelector("table").addEventListener("click", clickme)
};
addEvents();
window.onload = addColumns(cityPop);