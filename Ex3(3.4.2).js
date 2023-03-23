/*Task #3 - array processing
Создать массив и произвести над ним следующие 5 операций:


1.	Создайте массив styles с элементами «Джаз» и «Блюз».
2.	Добавьте «Рок-н-ролл» в конец.
3.	Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
4.	Удалите первый элемент массива и покажите его.
5.	Вставьте «Рэп» и «Регги» в начало массива.

Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/

let styles = ['Джаз', 'Блюз'];
//1) Afisarea initiala
console.log(styles);

//2)Adaugarea elementului, 2 este pozitia
styles[2] = 'Рок-н-рол'
console.log(styles);

//3)Adugarea si inlacuirea 
styles.splice(1, 1, 'Классика');
console.log(styles);

//4)Stergerea unui element
styles.shift();
console.log(styles);

//5)Adaugarea elementelor la inceputul sirului
styles.unshift('Рэп', 'Регги');
console.log(styles);
