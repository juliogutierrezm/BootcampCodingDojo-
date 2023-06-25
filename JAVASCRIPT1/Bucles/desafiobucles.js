for (var i = 1; i <=20; i++) {
    if (i % 2 === 1) {

    console.log(i);
    }
} 

  for (var i = 1; i <=100; i++) {
    if (i % 3 === 0) {

      console.log(i);
    }
  }

  const sequence = [4, 2.5, 1, -0.5, -2, -3.5];
  for (let i = 0; i < sequence.length; i++) {
   console.log(sequence[i]);
 }

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

let expression = '';
for (let i = 1; i <= 100; i++) {
  expression += i;
  if (i !== 100) {
    expression += ' + ';
  }
}

console.log(expression + ' = ' + sum);


let multiplication = 1;
for (let i = 1; i <= 12; i++) {
    multiplication = multiplication * i;
    console.log(multiplication);}

