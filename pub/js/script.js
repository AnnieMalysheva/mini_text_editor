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

// text style section
var styleBold = document.getElementById('btnBold');
var styleItalic = document.getElementById('btnItalic');
var styleUnderline = document.getElementById('btnUnderline');

styleBold.addEventListener('click', function () {
    var targetEl = document.querySelector('p');
    if (targetEl.style.fontWeight !== "bold") {
        targetEl.style.fontWeight = "bold";
    } else {
        targetEl.style.fontWeight = "normal";
    }
}, false);

styleItalic.addEventListener('click', function () {
    var targetEl = document.querySelector('p');
    if (targetEl.style.fontStyle !== "italic") {
        targetEl.style.fontStyle = "italic"
    } else {
        targetEl.style.fontStyle = "normal";
    }
}, false);

styleUnderline.addEventListener('click', function () {
    var targetEl = document.querySelector('p');
    if (targetEl.style.textDecoration !== "underline") {
        targetEl.style.textDecoration = "underline";
    } else {
        targetEl.style.textDecoration = "none";
    }
}, false);
//end of section