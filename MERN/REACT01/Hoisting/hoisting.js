 //1
/* console.log(hello);                                   
var hello = 'world'; */                                 

var hello = 'world';                                 
console.log(hello);  

//2

/* var needle = 'haystack';
test();
function test(){
var needle = 'magnet';
console.log(needle);
}
 */

var needle; // Declaración global de la variable needle
needle = 'haystack'; // Asignación de valor a la variable global

test(); // Llamada a la función test

function test(){
    var needle; // Declaración local de la variable needle
    needle = 'magnet'; // Asignación de valor a la variable local
    console.log(needle);
}


//3
/* 
var brendan = 'super cool';

function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); */

var brendan; // Declaración global de la variable brendan
brendan = 'super cool'; // Asignación de valor a la variable global
                        // (y se ejecuta el cálculo de la asignación)

function print(){
    brendan = 'only okay'; // Asignación de valor a la variable local
                           // (y se ejecuta el cálculo de la asignación)
    console.log(brendan);
}

console.log(brendan);
print(); // Llamada a la función print

//4
/* var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
} */

var food; // Declaración global de la variable food
food = 'chicken'; // Asignación de valor a la variable global
                 // (y se ejecuta el cálculo de la asignación)

function eat(){
food = 'half-chicken'; // Asignación de valor a la variable local
console.log(food); // Imprime el valor de la variable local
}
eat (); // Llamada a la función eat
var food = 'gone'; // Asignación de valor a la variable local'


//5

/* mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); */

var food; // Declaración global de la variable food
food = "chicken"; // Asignación de valor a la variable global
                 // (y se ejecuta el cálculo de la asignación)

function mean(){
    var food; // Declaración local de la variable food
    food = "fish"; // Asignación de valor a la variable local
    console.log(food); // Imprime el valor de la variable local
}
mean(); // Llamada a la función mean
console.log(food); // Imprime el valor de la variable global


        //6

/* console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); */

var genre; 
genre = "disco"; 
function rewind() {        
var genre; 
    genre = "rock"; 
    console.log(genre);
    genre = "r&b"; 
    console.log(genre); 
}
rewind ();
console.log(genre); 

// 7

/* dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); */

var dojo; // Declaración global de la variable 
dojo = "san jose"; // Asignación de valor a la variable global
    console.log(dojo); 
    function learn() {
        var dojo; 
        dojo = "seattle"; 
        console.log(dojo); 
        dojo = "burbank";
        console.log(dojo);
    }
learn(); 
console.log(dojo); 

//8
/* 
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }  */


   
    function makeDojo(name, students) {
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if (dojo.students > 50) {
            dojo.hiring = true;
        } else if (dojo.students <= 0) {
            return "closed for now";
        }
        return dojo;
    }

    
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    