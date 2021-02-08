function numb(k, ele) {
    if (!(document.getElementById("main").innerHTML.includes(".") && k == ".")) {
        if (!input1) {
            document.getElementById("main").innerHTML += k;
        }
        if (input1) {
            var len = input1.length;
            if (document.getElementById("main").innerHTML[len] == "+" || document.getElementById("main").innerHTML[len] == "-" || document.getElementById("main").innerHTML[len] == "*" || document.getElementById("main").innerHTML[len] == "/") {
                clearScr();
                document.getElementById("main").innerHTML += k;
            } else {
                document.getElementById("main").innerHTML += k;
            }
        }
    }
}

function clearScreen() {
    
    document.getElementById("main").innerHTML = "";
    input1 = "";
    input2 = "";
}

function clearScr() {
    document.getElementById("main").innerHTML = "";
}

var operation;
var input1;
var input2;

function operate(k, ele) {
    input1 = document.getElementById("main").innerHTML;
    if (k == "add") {
        
        operation = "add";
        document.getElementById("main").innerHTML += "+";
    }

    if (k == "sub") {
        
        operation = "sub";
        document.getElementById("main").innerHTML += "-";
    }

    if (k == "div") {
        
        operation = "div";
        document.getElementById("main").innerHTML += "/";
    }

    if (k == "mul") {
        
        operation = "mul";
        document.getElementById("main").innerHTML += "*";
    }
    clickstart(ele);

}


function ans(ele) {
    
    input2 = document.getElementById("main").innerHTML;
    clickstart(ele);
    switch (operation) {
        case "add":
            document.getElementById("main").innerHTML = parseFloat(input1) + parseFloat(input2);
            input1 = document.getElementById("main").innerHTML;
            input2 = "";
            break;
        case "sub":
            document.getElementById("main").innerHTML = input1 - input2;
            input1 = document.getElementById("main").innerHTML;
            input2 = "";
            break;
        case "div":
            document.getElementById("main").innerHTML = input1 / input2;
            input1 = document.getElementById("main").innerHTML;
            input2 = "";
            break;
        case "mul":
            document.getElementById("main").innerHTML = input1 * input2;
            input1 = document.getElementById("main").innerHTML;
            input2 = "";
            break;
        default:
            
            break;
    }
}

function Backspace() {
    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML.slice(0, -1);
}

function enternum(event) {
    
    switch (event.key) {
        case "1":
            numb(1);
            break;
        case "2":
            numb(2);
            break;
        case "3":
            numb(3);
            break;
        case "4":
            numb(4);
            break;
        case "5":
            numb(5);
            break;
        case "6":
            numb(6);
            break;
        case "7":
            numb(7);
            break;
        case "8":
            numb(8);
            break;
        case "9":
            numb(9);
            break;
        case "0":
            numb(0);
            break;
        case "/":
            operate("div");
            break;
        case "*":
            operate("mul");
            break;
        case ".":
            numb(".");
            break;
        case "=", "Enter":
            ans("ans");
            break;
        case "+":
            operate("add");
            break;
        case "-":
            operate("sub");
            break;
        case "Backspace":
            Backspace();
            break;
    }
}

function glow(ele) {
    ele.className = "glowing";
}

function revGlow(ele) {
    ele.className = "Normal";
}


function clickstart(ele) {
    
    ele.className = "clicked";
}

function clickstop(ele) {
    
    ele.className = "glowing";
}
