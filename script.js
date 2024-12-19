let calcHead = ``;

function Update() { 
    document.querySelector('#calcHead').innerText = `${calcHead}`;
}

function clearCalc(){
    calcHead=``;
    Update();
}
function evaluate(){
    calcHead=eval(calcHead).toString();
    Update();
}

function input(value){
    calcHead+=value;
    Update();
}