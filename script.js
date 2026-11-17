
const btn = document.getElementById("btn");
const color = document.getElementById("color");

function randomColor() {

    let hex = "#";

    const values = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {

        hex += values[Math.floor(Math.random() * 16)];

    }

    return hex;
}

btn.addEventListener("click", function() {

    const newColor = randomColor();

    document.body.style.backgroundColor = newColor;

    color.innerText = newColor;

});
