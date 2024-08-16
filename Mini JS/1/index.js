const body = document.getElementsByTagName("body")[0];
// body.style.backgroundColor = "red"
function setColor(color) {
    body.style.backgroundColor = color;
}

// setColor('green')

function randomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}

// randomColor()