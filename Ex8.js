/*Task #8 - conditional operator
Напишите код который проверит правильность username и password и выводит следующие сообщения:
•	Привет, если совпадает username и password
•	Неправильный пароль если username введен правильно а пароль нет
•	Неправильный username, если введен неправильный username
•	Ошибка Валидации, если ничего не введено
PS: На практике не делать такое никогда (писать пользователю что он ввел неверно, username или password)
*/

let username  = prompt('Introduceti login');
let password = prompt('Introduceti parola');

let checkLogin = (username == 'Operator' & password == 'csef41') ? ('Validation Error') : (username && password) ?
alert('Salut') : 
(username != 'Operator' & password == 'csef41')  ? alert('Login-ul a fost introdus incorect') : 
alert('Parola a fost introdusa incorect');
