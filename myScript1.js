var red = document.getElementById('slideRed').value;
var green = document.getElementById('slideGreen').value;
var blue = document.getElementById('slideBlue').value;
document.getElementById('table').style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
document.getElementById('rgb').innerHTML = "rgb(" + red + ", " + green + ", " + blue + ")";
document.getElementById('hex').innerHTML = '#'+toHexString(red)+toHexString(green)+toHexString(blue);
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