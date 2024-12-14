const input = document.getElementById("calcInput");

function appendValue(value) {
    input.value += value;
    console.log(value);
}

function back() {
    input.value = input.value.slice(0, -1);
}