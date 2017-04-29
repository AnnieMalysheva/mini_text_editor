/**
 * Created by Anna on 24.04.2017.
 */

// dropdown section
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
// end of section

// font size dropdown section
var fontSize = document.getElementsByClassName('font-size');

if (fontSize) {
    for (i = 0; i < fontSize.length; i++) {
        fontSize[i].addEventListener('click', function changeSize() {
            var el = document.querySelector('p');
            el.style.fontSize = this.textContent + 'px';
        }, false);
    }
}
// end of section

// color change dropdown section
var fontColor = document.getElementsByClassName('color');

if (fontColor) {
    for (i = 0; i < fontColor.length; i++) {
        fontColor[i].addEventListener('click', function changeColor() {
            var style = window.getComputedStyle(this);
            var color = style.getPropertyValue('background-color');
            var el = document.querySelector('p');
            el.style.color = color;
        }, false);
    }
}
// end of section

// alignment section
var alignmentList = document.getElementsByClassName('align');
console.log(alignmentList);
if (alignmentList) {
    for (i = 0; i < alignmentList.length; i++) {
        alignmentList[i].addEventListener('click', function () {
            var targetEl = document.querySelector('p');
            targetEl.style.textAlign = this.textContent;
        }, false)
    }
}
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
