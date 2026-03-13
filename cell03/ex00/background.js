//Math.floor(Math.random() * 256)

let pressButton = document.querySelector("button")

pressButton.addEventListener("click", () => {
    document.body.style.backgroundColor = changeColor()
})

function changeColor() {
    let newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return newColor;
}

// Uses hexadecimal
// 16777215 is the highest number in hexadecimal format = 0xFFFFFF
// converts integer result to hexadecimal in string format
// adds "#" in front of hexadecimal string
// EXAMPLE: (yellow {255,255,0} = #ffff00 / cyan {0,139,139} = #008b8b)