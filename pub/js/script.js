/**
 * Created by Anna on 24.04.2017.
 */
var dropdowns = document.querySelectorAll('[data-type="dropdown"]');

if (dropdowns) {
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", thisDropdown, false)
    }
}

function thisDropdown (event) {
    var targetEl = event.target;
    var dropElement = targetEl.nextElementSibling;
    if (dropElement.style.display !== "block") {
        dropElement.style.display = "block";
    } else {
        dropElement.style.display = "none";
    }
}

// selection
var selectedObject = document.getSelection();
var setAlignLeaft = document.getElementById("btnAlignLeft");

setAlignLeaft.addEventListener("click", function () {
    alert(selectedObject);
});
