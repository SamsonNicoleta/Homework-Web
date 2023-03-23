/*Создать массив который содержит минимум 10 чисел  (алгоритм должен работать для любого количества элементов)

[1, 5, 0, -5, 30, 100, -500, 0, 100, 55]

Написать следующие функции обработки этого массива: 
1.	выводит числа < 5
2.	находит позиции элементов с максимальным и минимальным значением
3.	сортирует массив убыванию
4.	выводит элементы массива которые имеют значение больше чем среднее арифметическое значение всех элементов массива*/

5.	let studentList = [
    6.	  { name: "Ion", marks: [8, 7, 6, 5, 8] },
    7.	  { name: "Adrian", marks: [9, 8, 8, 7, 8] },
    8.	  { name: "Andrei", marks: [6, 8, 9, 7, 7] },
    9.	  { name: "Marin", marks: [4, 5, 5, 6, 4] },
    10.	  { name: "Alexandru", marks: [10, 9, 9, 8, 10] },
    11.	  { name: "Maxim", marks: [4, 5, 7, 7, 6] }
    12.	]
    13.	
    14.	let averages = studentList.map(s => ({
    15.	  name: s.name,
    16.	  avg: s.marks.reduce((item, index) => item + index) / s.marks.length
    17.	}));
    18.	console.log(averages);
    19.	
    20.	let resultAvg = averages.filter(item => item.avg < 5); 
    21.	console.log('Studenti cu nota medie mai mica ca 5:', resultAvg)
    22.	
    23.	let [max] = studentList;
    24.	let maxAvg = Math.max(...studentList.map(item => item.marks));
    25.	console.log(`Studentul cu nota media cea mai mare este ${max.name} cu media ${max.marks}`);
    26.	
    27.	let [min] = studentList;
    28.	Math.min(...studentList.map(item => item.marks));
    29.	console.log(`Studentul cu nota medie minima ${min}`)
    30.	
    31.	let avgSort = averages;
    32.	console.log(avgSort.sort((item, index) => item.avg - index.avg));
    