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

// alignment section
var alignmentLeft = document.getElementById('btnAlignLeft');
var alignmentCenter = document.getElementById('btnAlignCenter');
var alignmentRight = document.getElementById('btnAlignRight');
var alignmentJustify = document.getElementById('btnAlignJustify');

alignmentLeft.addEventListener('click', function () {
    var targetEl = document.querySelector('p');
    targetEl.style.textAlign = "left";
}, false);

alignmentCenter.addEventListener('click', function () {
    var targetEl = document.querySelector('p');
    targetEl.style.textAlign = "center";
}, false);

alignmentRight.addEventListener('click', function () {
    var targetEl = document.querySelector('p');
    targetEl.style.textAlign = "right";
}, false);

alignmentJustify.addEventListener('click', function () {
    var targetEl = document.querySelector('p');
    targetEl.style.textAlign = "justify";
}, false);
//end of section