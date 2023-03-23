/*Task #9 - user interaction
Напишите код который при открытии страницы запросит у пользователя его имя(prompt). После ввода имени, вывести ему сообщение `Привет ${name}`. Спросить у пользователя если он знаком с языком JavaScript(confirm) и вывести `Молодец`, если его ответ Да и сообщение `Можно начать изучение прямо сейчас`, если его ответ Нет.
*/

let userName = prompt('Introduceti numele');
alert(`Salut ${userName}!`);

let answer = (confirm('Cunoașteți limbajul Js?')) ? alert('Bravo!') : alert('Spoate de inceput chiar acum!');
