
var count = 1;
var count2 = 1;
var count3 = 1;

var contadordelikes = document.querySelector("#likes-count");
var contadordelikes2 = document.querySelector("#likes-count2");
var contadordelikes3 = document.querySelector("#likes-count3");




function add1() {
    count++;
    contadordelikes.innerText =  count + " " + "like(s)";
 
}


function add2() {
    count2++;
    contadordelikes2.innerText =  count2 + " " + "like(s)";


}

function add3() {
    count3++;
    contadordelikes3.innerText =  count3 + " " + "like(s)";
   

}