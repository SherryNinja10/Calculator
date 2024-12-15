const input = document.getElementById("calcInput");
const answer = document.getElementById("answerBox");
const errorMessage = "Enter a valid equation";

function appendValue(value) {
    input.value += value;
    console.log(value);
    output();
}

function back() {
    input.value = input.value.slice(0, -1);
    output();
}

function output() {
    try {
        if (eval(input.value) == "") {
            answer.textContent = "Enter an equation";
        } else {
            answer.textContent = `${eval(input.value)}`;
        }
    }
    catch(error) {
        answer.textContent = errorMessage;
    }
}