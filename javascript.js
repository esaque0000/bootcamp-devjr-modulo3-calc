function calc(op){
    var num1 = parseFloat(document.getElementById("num1").value); 
    var num2 = parseFloat(document.getElementById("num2").value); 
 
    var output = 0;

    switch(op){
        case '+' : output = num1 + num2; break;
        case '-' : output = num1 - num2; break;
        case '*' : output = num1 * num2; break;
        case '/' : output = num1 / num2; break;
    }

    document.getElementById("output").value = output;

    var newHistory = "<div>" + num1 + " " + op + " " + num2 + " = " + " " + output + "<div>";

    document.getElementById("history").innerHTML = newHistory + document.getElementById("history").innerHTML;
}