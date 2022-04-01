
var red = document.getElementById('slideRed').value;
document.getElementById('valRed').innerHTML = red;


var green = document.getElementById('slideGreen').value;
document.getElementById('valGreen').innerHTML = green;


var blue = document.getElementById('slideBlue').value;
document.getElementById('valBlue').innerHTML = blue;

function changeRed(value) {
    document.getElementById('valRed').innerHTML = value;
    changeAll();
}
function changeGreen(value) {
    document.getElementById('valGreen').innerHTML = value;
    changeAll();
}
function changeBlue(value) {
    document.getElementById('valBlue').innerHTML = value;
    changeAll();
}

function changeAll() {
    var r = document.getElementById('valRed').innerHTML;
    var g = document.getElementById('valGreen').innerHTML;
    var b = document.getElementById('valBlue').innerHTML;
    document.getElementById('table').style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById('rgb').innerHTML = "rgb(" + r + ", " + g + ", " + b + ")";
    document.getElementById('hex').innerHTML = '#'+toHexString(r)+toHexString(g)+toHexString(b);
}
function toHexString(number){
    var ext = ['00','01','02','03','04','05','06','07','08','09','0a','0b','0c','0d','0e','0f'];
    var n= Number(number).toString(16);

    if (n == 0 ) {
        n = ext[0];
    }
    if (n == 1 ) {
        n = ext[1];
    }
    if (n == 2 ) {
        n = ext[2];
    }
    if (n == 3 ) {
        n = ext[3];
    }
    if (n == 4 ) {
        n = ext[4];
    }
    if (n == 5 ) {
        n = ext[5];
    }
    if (n == 6 ) {
        n = ext[6];
    }
    if (n == 7 ) {
        n = ext[7];
    }
    if (n == 8 ) {
        n = ext[8];
    }
    if (n == 9 ) {
        n = ext[9];
    }
    if (n == 'a') {
        n = ext[10];
    }
    if (n == 'b') {
        n = ext[11];
    }
    if (n == 'c') {
        n = ext[12];
    }
    if (n == 'd') {
        n = ext[13];
    }
    if (n == 'e') {
        n = ext[14];
    }
    if (n == 'f') {
        n = ext[15];
    }
    
    return n;
}