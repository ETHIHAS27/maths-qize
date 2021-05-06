operation = " ";


function send(){
    num1 = document.getElementById("Number1").value;
    num2 = document.getElementById("Number2").value;
    question = "<h4>"+num1+ " "+ operation +" " + num2 
    inputbox = "<br>Answer = <input id='input_answer' type='number'>"
    button = "<br><button id='check_button' onclick='check()' class='btn btn-info'>Check</button>"
    document.getElementById("output").innerHTML = question + inputbox + button
    console.log(operation);
}

function add(){
    operation = '+';
}

function sub(){
    operation = '-';
}

function mul(){
    operation = '*';
}

function div(){
    operation = '/';
}