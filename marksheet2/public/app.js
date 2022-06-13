
var a = prompt("Enter Your Urdu Marks");
var urdu = parseInt(a);
window.document.getElementById("urdu").innerText = a
// window.document.getElementById("urdu-total").innerHTML = a
var a1 = (a/100)*100;
window.document.getElementById("urdu-total").innerHTML = a1

if(a < 33){
    window.document.getElementById("urdu-result").innerHTML = "Fail"
}
else{
    window.document.getElementById("urdu-result").innerHTML = "Pass"
}


var b = prompt("Enter Your Englishs Marks");
var eng = parseInt(b);
window.document.getElementById("eng").innerText = b
window.document.getElementById("eng-total").innerHTML = b

if(b < 33){
    window.document.getElementById("eng-result").innerHTML = "Fail"
}
else{
    window.document.getElementById("eng-result").innerHTML = "Pass"
}


var c = prompt("Enter Your Islamiat Marks");
var isl = parseInt(c);
window.document.getElementById("isl").innerText = c
// window.document.getElementById("isl-total").innerHTML = c

var c1 = (c/50)*100;
window.document.getElementById("isl-total").innerHTML = c1
if(c < 23){
    window.document.getElementById("isl-result").innerHTML = "Fail"
}
else{
    window.document.getElementById("isl-result").innerHTML = "Pass"
}



var d = prompt("Enter Your Chemistry Theory Marks");
var chemTheory = parseInt(d);
window.document.getElementById("chem-th").innerText = d

var e = prompt("Enter Your Chemistry Practical Marks");
var chemPrac = parseInt(e);
window.document.getElementById("chem-pr").innerText = e

var chemTotal = chemTheory + chemPrac;
window.document.getElementById("chem-total").innerHTML = chemTotal


if(d < 28 || e < 5){
    window.document.getElementById("chem-result").innerHTML = "Fail"
}
else{
    window.document.getElementById("chem-result").innerHTML = "Pass"
}




var f = prompt("Enter Your Physics Theory Marks");
var phyTheory = parseInt(f);
window.document.getElementById("phy-th").innerText = f

var g = prompt("Enter Your Physics Practical Marks");
var phyPrac = parseInt(g);
window.document.getElementById("phy-pr").innerText = g

var phyTotal = phyTheory + phyPrac;
window.document.getElementById("phy-total").innerHTML = phyTotal


if(f < 28 || g < 5){
    window.document.getElementById("phy-result").innerHTML = "Fail"
}
else{
    window.document.getElementById("phy-result").innerHTML = "Pass"
}





var h = prompt("Enter Your Mathematics Marks");
var maths = parseInt(h);
window.document.getElementById("maths").innerText = h
window.document.getElementById("maths-total").innerHTML = h

if(h < 33){
    window.document.getElementById("maths-result").innerHTML = "Fail"
}
else{
    window.document.getElementById("maths-result").innerHTML = "Pass"
}





var t = urdu + eng + isl + phyTheory + phyPrac + chemTheory + chemPrac + maths;
if(a < 33){
    t = t - a;
}
if(b<33)
{
    t = t - b;

}
if(c<23){
    t = t -c;
}
if(d < 28 || e < 5){
    t = t-d;
    t = t-e;
}
if(f < 28 || g < 5){
    t = t-f;
    t = t-g;
}
if(h<33){
    t = t-h;
}

window.document.getElementById("total").innerHTML = t

var percent = (t/550)*100;
var percentage = percent.toFixed(2);
window.document.getElementById("percentage").innerText = percentage




if(percentage>=80){
    window.document.getElementById("grade").innerHTML = "A+"
}
if(percentage >= 70 && percentage < 80){
    window.document.getElementById("grade").innerHTML = "A"
}
if(percentage >= 60 && percentage < 70){
    window.document.getElementById("grade").innerHTML = "B"
}
if(percentage >= 50 && percentage < 60){
    window.document.getElementById("grade").innerHTML = "C"
}
if(percentage >= 40 && percentage < 50){
    window.document.getElementById("grade").innerHTML = "D"
}
if(percentage > 33 && percentage < 40){
    window.document.getElementById("grade").innerHTML = "E"
}
if(percentage < 33 || a < 33 || b < 33 || c < 23 || d < 28 || e < 5 || f < 28 || g < 5 || h < 33) {
    window.document.getElementById("grade").innerHTML = "F"
}
    










