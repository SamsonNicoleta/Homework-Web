/*Task #10 - conditional operator and loops
Напишите функцию которая определяет и выводит в консоль все делитель заданного числа.
const dividers = (number) => {
//	your code here
}
*/

const dividers = (number) => {
    let dividers = '';
    for (let i = 0; i <= number; ++i) {
        if (number % i == 0) {
            dividers = dividers + i + ' ';
        }
    }
    alert(dividers);
  }
  dividers(prompt('Introduceti numarul'))
  
  