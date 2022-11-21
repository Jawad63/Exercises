var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color-one");
var color2 = document.querySelector(".color-two");
var body = document.getElementById("gradient");

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