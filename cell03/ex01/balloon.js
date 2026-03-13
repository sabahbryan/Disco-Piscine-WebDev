//click = +10px & change colour (red->green->blue->red)
//explode at 420px, return to 200px
//hover then leave = -5px & reverse colour (red->blue->green->red)
//minimum 200px

const circleBalloon = document.querySelector("div");

const colors = ["red", "green", "blue"];
let colorIndex = 0;

function clickIncrease() {

    let x1 = circleBalloon.offsetWidth;
    let y1 = circleBalloon.offsetHeight;

    let x2 = x1 + 10;
    let y2 = y1 + 10;

    circleBalloon.style.width = x2 + "px";
    circleBalloon.style.height = y2 + "px";

    circleBalloon.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

circleBalloon.addEventListener('click', clickIncrease);

function hoverDecrease() {

    let x1 = circleBalloon.offsetWidth;
    let y1 = circleBalloon.offsetHeight;

    let x2 = x1 - 5;
    let y2 = y1 - 5;

    circleBalloon.style.width = x2 + "px";
    circleBalloon.style.height = y2 + "px";

    circleBalloon.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex - 1) % colors.length;
}

circleBalloon.addEventListener('mouseleave', hoverDecrease);

function explodeBalloon() {
    //if (circleBalloon.style.width  >= 420)
    let x2 = 200;
    let y2 = 200;

    circleBalloon.style.width = x2 + "px";
    circleBalloon.style.height = y2 + "px";
}

/*
if click (x < 420)
    size +10
    color +1

if hover (x > 200)
    size -5
    color -1

if size >= 420
    size = 200

if size <= 200
    size = 200
*/