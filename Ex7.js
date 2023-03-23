/*Task #7 - conditional operator
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
*/

let age = prompt('Introduceti varsta');

if(age <= 14 & age >= 90){
  alert('Varsta introdusa  Nu este in intervalul 14 si 90');
}else{
  alert('Varsta introduse se afla in intervalul 14 si 90');
}

//Versiunea cu !!//

if(age = !! (age <= 90 & age >=14 )){
  alert('Varsta introdusa se afla in intervalul 14 si 90');
}else{
  alert('Varsta introduse se afla in intervalul 14 si 90');
}

