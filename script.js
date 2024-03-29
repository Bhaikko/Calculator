let outputNumber = 0;
let bFunctionPressed = false;

let outputBox = document.getElementById("outputBox");
let expression = document.getElementById("expression");
let output = document.getElementById("output");

// Button References
let square = document.getElementById("square");
let power = document.getElementById("power");
let sin = document.getElementById("sin");
let cos = document.getElementById("cos");
let tan = document.getElementById("tan");
let clearOutput = document.getElementById("clearOutput");
let clearAll = document.getElementById("clearAll");
let backSpace = document.getElementById("backSpace");
let divide = document.getElementById("divide");

let cube = document.getElementById("cube");
let fractionalPower = document.getElementById("fractionalPower");
let sineInverse = document.getElementById("sineInverse");
let cosineInverse = document.getElementById("cosineInverse");
let tanInverse = document.getElementById("tanInverse");
let digit7 = document.getElementById("digit7");
let digit8 = document.getElementById("digit8");
let digit9 = document.getElementById("digit9");
let multiply = document.getElementById("multiply");

let root = document.getElementById("root");
let antilogBase10 = document.getElementById("antilogBase10");
let logBase10 = document.getElementById("logBase10");
let power10 = document.getElementById("power10");
let remainder = document.getElementById("remainder");
let digit4 = document.getElementById("digit4");
let digit5 = document.getElementById("digit5");
let digit6 = document.getElementById("digit6");
let subtract = document.getElementById("subtract");

let reciprocal = document.getElementById("reciprocal");
let antilogBaseE = document.getElementById("antilogBaseE");
let logBaseE = document.getElementById("logBaseE");

let add = document.getElementById("add");

let pi = document.getElementById("pi");
let factorial = document.getElementById("factorial");
// let leftBracket = document.getElementById("leftBracket");
// let rightBracket = document.getElementById("rightBracket");
let changeSign = document.getElementById("changeSign");
let digit0 = document.getElementById("digit0");
let decimal = document.getElementById("decimal");
let equal = document.getElementById("equal");

//Digit Handler
digit0.addEventListener("click", digitPressed);
digit1.addEventListener("click", digitPressed);
digit2.addEventListener("click", digitPressed);
digit3.addEventListener("click", digitPressed);
digit4.addEventListener("click", digitPressed);
digit5.addEventListener("click", digitPressed);
digit6.addEventListener("click", digitPressed);
digit7.addEventListener("click", digitPressed);
digit8.addEventListener("click", digitPressed);
digit9.addEventListener("click", digitPressed);

//Arthematic Handler
add.addEventListener("click", functionPressed);
subtract.addEventListener("click", functionPressed);
multiply.addEventListener("click", functionPressed);
divide.addEventListener("click", functionPressed);
remainder.addEventListener("click", functionPressed);
equal.addEventListener("click", functionPressed);


//Left Panel Functions
square.addEventListener("click", functionPressed);
power.addEventListener("click", functionPressed);
sin.addEventListener("click", functionPressed);
cos.addEventListener("click", functionPressed);
tan.addEventListener("click", functionPressed);
cube.addEventListener("click", functionPressed);
fractionalPower.addEventListener("click", functionPressed);
sineInverse.addEventListener("click", functionPressed);
cosineInverse.addEventListener("click", functionPressed);
tanInverse.addEventListener("click", functionPressed);
root.addEventListener("click", functionPressed);
antilogBase10.addEventListener("click", functionPressed);
logBase10.addEventListener("click", functionPressed);
power10.addEventListener("click", functionPressed);
reciprocal.addEventListener("click", functionPressed);
antilogBaseE.addEventListener("click", functionPressed);
logBaseE.addEventListener("click", functionPressed);
pi.addEventListener("click", functionPressed);
factorial.addEventListener("click", functionPressed);
changeSign.addEventListener("click", functionPressed);
backSpace.addEventListener("click", function()
{    output.innerText = output.innerText.slice(0, -1);});

decimal.addEventListener("click", function()
{   
    if(output.innerText.includes("."))
        return;

    output.innerText += ".";
});

//Clear Handler TODO Need To Handle Backspace Button
clearOutput.addEventListener("click", function()
{    output.innerText="";});

clearAll.addEventListener("click",function()
{ 
    output.innerText=""; 
    expression.innerText=""; 
    outputNumber = 0;
});


//Functions
function digitPressed(event)
{
    if(bFunctionPressed)
    {
        output.innerText = "";
        bFunctionPressed = false;
    }
    output.innerText += event.target.innerText;
     
}

function functionPressed(event)
{
    console.log(event.target.innerText);
    
    bFunctionPressed = true;

    if(event.target.innerText == "=")
    {      
        let expressionArray = expression.innerText.split(" ");

        if(expressionArray[expressionArray.length - 1]=="+")
            outputNumber += parseFloat(output.innerText);
        else if(expressionArray[expressionArray.length - 1]=="-")
            outputNumber -= parseFloat(output.innerText);
        else if(expressionArray[expressionArray.length - 1]=="×")
            outputNumber *= parseFloat(output.innerText);    
        else if(expressionArray[expressionArray.length - 1]=="÷")
            outputNumber /= parseFloat(output.innerText);  
        else if(expressionArray[expressionArray.length - 1]=="^")       
            outputNumber =  Math.pow(parseFloat(expressionArray[expressionArray.length - 2]), parseFloat(output.innerText));     
        else if(expressionArray[expressionArray.length - 1]=="Mod")       
            outputNumber %=  parseFloat(output.innerText);     
        else if((expressionArray[expressionArray.length - 1]).includes(".e+"))    
            outputNumber = parseFloat((expressionArray[expressionArray.length - 1]).split(".")[0]) * Math.pow(10, parseFloat(output.innerText));

        output.innerText = outputNumber;

        outputNumber = 0;
        expression.innerText = "";
    }
    else if (event.target.innerText == "+")
    {
        expression.innerText += " " + output.innerText + " +";
        outputNumber = outputNumber + parseFloat(output.innerText);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "‐")
    {
        expression.innerText += " " + output.innerText + " -";
        if(outputNumber == 0 && expression.innerText.split(" ").length == 2)
            outputNumber = parseFloat(output.innerText);
        else 
            outputNumber = outputNumber - parseFloat(output.innerText); 

        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "×")
    { 
        expression.innerText += " " + output.innerText + " ×";
        if(outputNumber == 0 && expression.innerText.split(" ").length == 2)
            outputNumber = 1;
        outputNumber = outputNumber * parseFloat(output.innerText);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "÷")
    {       
        expression.innerText += " " + output.innerText + " ÷";
        outputNumber = outputNumber + parseFloat(output.innerText);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "x2")
    {    
        expression.innerText += " sqr(" + output.innerText + ")";
        outputNumber = outputNumber;
        output.innerText = outputNumber;  
    }
    else if (event.target.innerText == "xy")
    {    
        expression.innerText += " " + output.innerText + " ^";    
        outputNumber = parseFloat(output.innerText);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "sin")
    {    
        expression.innerText += " sin(" + output.innerText + ")";    
        outputNumber = Math.sin(parseFloat(output.innerText) * Math.PI / 180);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "cos")
    {    
        expression.innerText += " cos(" + output.innerText + ")";    
        if(output.innerText == "90" || output.innerText == "270")
            outputNumber = 0;
        else 
            outputNumber = Math.cos(parseFloat(output.innerText) * Math.PI / 180);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "tan")
    {    
        expression.innerText += " tan(" + output.innerText + ")";    
        outputNumber = Math.tan(parseFloat(output.innerText) * Math.PI / 180, 2);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "x3")
    {    
        expression.innerText += " cube(" + output.innerText + ")" ;    
        outputNumber = Math.pow(parseFloat(output.innerText), 3);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "sin-1")
    {    
        expression.innerHTML += " sin<sup>-1</sup>(" + output.innerText + ")";    
        outputNumber = Math.asin(parseFloat(output.innerText)) * 180 / Math.PI;
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "cos-1")
    {    
        expression.innerHTML += " sin<sup>-1</sup>(" + output.innerText + ")";    
        outputNumber = Math.acos(parseFloat(output.innerText)) * 180 / Math.PI;
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "tan-1")
    {    
        expression.innerHTML += " sin<sup>-1</sup>(" + output.innerText + ")";    
        outputNumber = Math.atan(parseFloat(output.innerText)) * 180 / Math.PI;
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "√")
    {    
        expression.innerText += " √(" + output.innerText + ")" ;    
        outputNumber = Math.pow(parseFloat(output.innerText), 0.5);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "10x")
    {    
        expression.innerText += " 10^(" + output.innerText + ")" ;
        outputNumber = Math.pow(10, parseFloat(output.innerText));
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "log")
    {    
        expression.innerText += " log(" + output.innerText + ")" ;    
        outputNumber = Math.log10(parseFloat(output.innerText));
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "Exp")
    {    
        expression.innerText += " " + output.innerText + ".e+" ;    
        outputNumber = parseFloat(output.innerText);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "Mod")
    {    
        expression.innerText += " " + output.innerText + " Mod ";    
        outputNumber = parseFloat(output.innerText);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "1/x")
    {    
        expression.innerText += "1/(" + output.innerText + ")";    
        outputNumber = 1 / parseFloat(output.innerText);
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "ex")
    {    
        expression.innerText += " e^(" + output.innerText + ")" ;    
        outputNumber = Math.exp(parseFloat(output.innerText));
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "ln")
    {    
        expression.innerText += " ln(" + output.innerText + ")" ;    
        outputNumber = Math.log(parseFloat(output.innerText));
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "π")
    {    
        expression.innerText += " π "  ;    
        outputNumber = Math.PI;
        output.innerText = outputNumber;
    }
    else if (event.target.innerText == "n!")
    {    
        expression.innerText += output.innerText + "!" ;    
        outputNumber = calculateFactorial(parseFloat(output.innerText));
        output.innerText = outputNumber;
    } 
    else if (event.target.innerText == "±")
    {    
        output.innerText = -1 * parseFloat(output.innerText);
    }    
    console.log(outputNumber);
}



function calculateFactorial(number)
{
    if (number == 0 || number == 1)
    {   return 1;}

    let smallFactorial = calculateFactorial(number - 1);

    return smallFactorial * number;
}

