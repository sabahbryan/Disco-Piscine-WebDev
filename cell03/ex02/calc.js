// {firstnum} {operator} {secondnum} = results

document.getElementById("calcform").addEventListener("submit", function() {

    let first = document.getElementById("firstnum").value;
    let second = document.getElementById("secondnum").value;
    let operator = document.getElementById("operator").value;

    first = Number(first);
    second = Number(second);

    if (!Number.isInteger(first) || !Number.isInteger(second) ||
            (first < 0) || (second < 0)) {
        console.log("ERROR :(");
        alert("ERROR :(");
        return ;
    }

    if ((operator === "/" || operator === "%") && second === 0) {
        console.log("It's over 9000!");
        alert("It's over 9000!");
        return ;
    }

    let result;

    switch(operator) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "/":
            result = first / second;
            break;
        case "%":
            result = first % second;
            break;
    }

    console.log(result);
    alert(result);
});

setInterval(function(){
    alert("Please use me");
}, 30000);