
// PROBLEMA 1

function siempreHambriento(arr) {
let delicioso = false;
    
for (var i = 0; i < arr.length; i++) {

    if (arr[i] === "comida") {
        delicioso = true;
        console.log("delicioso");
}
}
if (!delicioso) {
console.log ("Tengo hambre");

}
}
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);

siempreHambriento([4, 1, 5, 7, 2]);


// PROBLEMA 2

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
if (arr[i] > cutoff) {  
    filteredArr.push(arr[i]);
    }
    }
    // tu código aquí
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

// PROBLEMA 3 

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]; // sum = sum + arr[i]
    }
        sum = sum / arr.length; 


        for (var i = 0; i < arr.length; i++) {
        if (arr[i] >sum) { 
        count++;
    }
}
    // cuenmta cuánmtas variables son mayores que el promedio
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta



// PROBLEMA 4

function reverse(arr) {
    reversedArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);

    }
    // tu código aquí
    return reversedArray;
}

var result = reverse(["a", "b", "c", "d", "e"]); 

console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


// PROBLEMA 5

function fibonacciArray(n) {

    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for (var i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);

    }
    // tu código aquí
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





