let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');

// Function to convert celsius value to fahrenheit
celsius.addEventListener('input', function() {
    let cel = celsius.value;
    let fah = (cel * 9/5) + 32;
    fahrenheit.value = fah;
});

// Function to convert fahrenheit value to celsius
fahrenheit.addEventListener('input', function() {
    let fah = fahrenheit.value;
    let cel = (fah - 32) * 5/9;
    celsius.value = cel;
});