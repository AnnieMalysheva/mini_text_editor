/**
 * Created by Anna on 24.04.2017.
 */
var dropdown1 = document.getElementById("fontSize");

dropdown1.addEventListener("click", function() {
    var list = document.getElementById("fontSizeList");
    if (list.style.display !== "block") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
});

var dropdown2 = document.getElementById("colorPalette");

dropdown2.addEventListener("click", function () {
    var table = document.getElementById("colorPicker");
    if (table.style.display !== "block") {
        table.style.display = "block";
    } else {
        table.style.display = "none";
    }
});
