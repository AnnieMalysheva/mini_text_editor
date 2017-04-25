/**
 * Created by Anna on 24.04.2017.
 */
var elem = document.getElementById("fontSize");

elem.addEventListener("click", function() {
    var list = document.getElementById("fontSizeList");
    if (list.style.display !== "block") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
});
