var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operator = null;
var operand1 = 0;
var operand2 = null;

function Operatortype(value){
    return value == "+" || value == "-" || value == "*" || value == "/" ;
    }

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var value = this.getAttribute("data-value");
        var Content = display.textContent.trim();

        if(Operatortype(value)){
            operator = value;
            operand1 = parseFloat(Content);
            display.textContent = "";
        }else if(value == "AC"){
            display.textContent = "";
        }else if( value == "c"){
            operand1 = parseFloat(Content)
            operand1 = -1 * operand1;
            display.textContent  = operand1;
        }else if(value == "%"){
            operand1 = parseFloat(Content);
            operand1 = operand1 / 100;
            display.textContent = operand1;
        }else if(value == "00"){
            operand1 = parseFloat(Content);
            operand1 = operand1 * 100;
            display.textContent = operand1;
        }else if(value == "="){
              operand2 = parseFloat(Content);
              var result = eval(operand1 + ' '+ operator + ' ' + operand2);
              display.textContent = result;
              operator = null;
              operand1 = 0;
              operand2 = null;
        }else{
            display.textContent += value;
        }
        
    })
}

