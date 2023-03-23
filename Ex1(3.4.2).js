/*Task #1 - array display
Создайте массив из n чисел и выводите его в консоль 5 разными способами:
•	for, while, do … while
•	for in
•	for of
•	forEach
•	map
В конце кода, пишите в комментарии свое мнение какой из способов лучше. Найдите еще один способ вывода массива.
*/

//-----Varianta cu For--->

n = prompt('Introduceti cate elemente va avea matricea');
let myArrayOne = [n];
console.log('1) Prima metoda for: ');
for (let i = 0; i <= n; i++) {
    myArrayOne[i] = i; //initializam sirul de numere
    console.log(myArrayOne[i]);
}

//----Varianta cu While--->

let i = 0;
let myArrayTwo = [n];
console.log('2) Metoda While: ');
while (i <= n) {
    myArrayTwo[i] = i;
    console.log(i);
    i++;
}

//----Varianta cu Do-While--->

//let i = 0;
let myArrayThree = [n];
console.log('3) Metoda Do-While: ');
do {
    myArrayThree[i] = i;
    console.log(i);
    i++;
}
while (i <= n);

//----Varianta cu For-In--->

var myArrayFour = [n];
console.log('4) Metoda For...In: ');
for (let i = 0; i <= n; i++)
    myArrayFour[i] = i;
for (let i in myArrayFour) {
    console.log(myArrayFour[i]);
}

//----Varianta cu For-Of--->

let myArrayFive = [n];
console.log('5) Metoda For...Of: ');
for (let i = 0; i <= n; i++)
    myArrayFive[i] = i;
for (let i of myArrayFive) {
    console.log(i);
}


//----Varianta cu Map--->
console.log('7) Metoda Map: ');
let myArraySeven = Array(3).fill().map((_, i) => i);
console.log(myArraySeven);

//----Varianta cu ES6--->

console.log('8) Metoda ES6: ');
let myArrayEight = Array.from(Array(3).keys(i));
console.log(myArrayEight);
