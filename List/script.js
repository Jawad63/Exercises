let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let unorderedList = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    unorderedList.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// function to add itmes through enter
function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.code === "Enter") {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
