const links = document.querySelectorAll("link");
const toggleBtn = document.querySelectorAll("input");
const prevOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");
const deleteBtn = document.querySelector("[data-delete]");
const resultBtn = document.querySelector("[data-output]");
const resetBtn = document.querySelector("[data-reset]");
const operands = document.querySelectorAll("[data-num]");
const operatorBtn = document.querySelectorAll("[data-operator]");
let prevOperand = prevOperandText.innerText;
let currentOperand = currentOperandText.innerText;
let operation;

function themeChange(i) {
    if (i.value == "0") {
        document.body.id = "theme_one"
    }
    if (i.value == "1") {
        document.body.id = "theme_two"
    }
    if (i.value == "2") {
        document.body.id = "theme_there"
    }
}

// delete all Operand and Number from currentOperand and currentOperand
function reset() {
    prevOperand = "";
    currentOperand = "";
    operation = undefined;
}

// delete last Operand from currentOperand
function deleteOperand() {
    currentOperand = currentOperand.toString().slice(0, -1);
    console.log(currentOperand)
}
// add Number to currentOperand
function addNumber(number) {
    if (number === "." && currentOperand.includes(".")) return;
    currentOperand = currentOperand.toString() + number.toString();
}

// add Number and operation to prevOperand 
function operationSelection(operate) {
    if (currentOperandText === "") return;
    if (prevOperandText !== "") {
        calculatorOperation();
    }
    operation = operate;
    prevOperand = currentOperand;
    currentOperand = "";
}

// set value that depends on type operation and moved to currentOperand (click process equals)
function calculatorOperation() {
    let result;
    /* The parseFloat() function parses a string argument and returns a floating point number.
    ---- parseFloat("1.7976931348623159e+308"); // Infinity &&&&&& ---- parseFloat("-1.7976931348623159e+308"); // -Infinity */
    let prev = parseFloat(prevOperand);
    let current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case "+":
            result = prev + current;
            break;

        case "-":
            result = prev - current
            break;

        case "×":
            result = prev * current;
            break;

        case "/":
            result = prev / current;
            break;

        default:
            return;
    }
    currentOperand = result;
    operation = undefined;
    prevOperand = "";
    prevOperandText.innerText = "";
}

// set currentOperandText after choose operation (click process equals)
function displayNum() {
    /*The toLocaleString('ar-EG') method 
    returns a string with a language-sensitive 
    representation of this number*/
    currentOperandText.innerText = currentOperand.toLocaleString("en");
    if (operation !== undefined) {
        prevOperandText.innerText = `${prevOperand} ${operation.toString("en")}`;
    } else {
        prevOperandText.innerText = prevOperand;
    }
}

toggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        themeChange(btn);
    });
})

resetBtn.addEventListener("click", () => {
    reset();
    displayNum();
});

deleteBtn.addEventListener("click", () => {
    deleteOperand();
    displayNum();
});

operands.forEach(operand => {
    operand.addEventListener("click", () => {
        addNumber(operand.innerText);
        displayNum();
    });
});

operatorBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        operationSelection(btn.innerText);
        displayNum();
    })
})

resultBtn.addEventListener("click", () => {
    calculatorOperation();
    displayNum();
});