const evaluateButton = document.getElementById("evaluate-button");
const input1Element = document.getElementById('input1')
const input2Element = document.getElementById('input2')
const outputElement = document.getElementById('output')

evaluateButton.addEventListener("click", evaluate);
input1Element.addEventListener('input', validate);
input2Element.addEventListener('input', validate);

function evaluate() {
    let input1 = parseInt(input1Element.value);
    let input2 = parseInt(input2Element.value);
    
    const operation = document.getElementById('operations').value;
    let result;
    switch(operation) {
        case "add":
            result = input1 + input2;
            break;
        case "sub":
            result = input1 - input2;
            break;
        case "mul":
            result = input1 * input2;
            break;
        case "div":
            result = input1 / input2;
            break;
    }
    updateDOMResult(result);
}

function validate(event) {
    let input = event.target.value;
    // only check the last character
    const lastCharacter = input[input.length - 1];
    if(isNaN(parseInt(lastCharacter))) {
        input = input.substr(0, input.length - 1);
        event.target.value = input;
    }
    resetOutput();
    if(input1Element.value != "" && input2Element.value != "")
        evaluate();
}

function updateDOMResult(result) {
    if(isNaN(result)) {
        outputElement.innerHTML = `
        Some unexpected error occured! <br> Here is the result if you're STILL interested: ${result}
        `
        return;
    }
    outputElement.innerHTML = `
    Here is the answer you are looking for: ${result}
    `
}

function resetOutput() {
    outputElement.innerHTML = `Your output will be shown here :)`;
}