let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color-one");
let color2 = document.querySelector(".color-two");
let body = document.getElementById("gradient");

function setGradientColor () {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradientColor);
color2.addEventListener("input", setGradientColor);