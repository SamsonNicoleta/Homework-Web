/*Task #6 - conditional operator
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
	
•	1, если значение больше нуля,
•	-1, если значение меньше нуля,
•	0, если значение равно нулю.
•	Error, если введено не число*/

n = prompt('Introduceti un numar ')

if(n > 1){
  alert('1');
}
else if(n == 0){
  alert('0');
}
else if(n < 0){
  alert('-1');
}
else{
  alert(Error);
}

