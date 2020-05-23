

var array = new Array();
var arrayrnd = [];
var dataset;

function changeImage() {
    loadJSON(function (response) {
        dataset = JSON.parse(response);
        var con = true;
        var c = 0;
        while (con) {
            var f = false;
            c = getRnd();
            var cont = 0;
            arrayrnd.map(item => {
                if (item === c) {
                    f = true;
                }
                cont++;
            })
            if (cont === dataset.collection.length) {
                arrayrnd = [];
            } else {
                if (f) {
                    con = true;
                } else {
                    con = false;
                }
            }
        }
        document.getElementById("image").setAttribute("src", dataset.collection[c].src);
        document.getElementById("answer").innerHTML = dataset.collection[c].opera
        document.getElementById("answer").style.display = "none";
    });
}
function showAnswer() {
    document.getElementById("answer").style.display = "block";
}

function getRnd() {
    return Math.floor(Math.random() * 60);
}

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './dataset.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}