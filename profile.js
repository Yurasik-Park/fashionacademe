
var data = [];
$(document).ready(function() {

    $('a').on('click', function() {
      data[0] = $(this).data('num');
      data[1] = $(this).find('span').text();
    });
});
var mytext = document.getElementById('mytext');
var result = document.getElementById('result');
var sendbtn = document.getElementById('me');

// Ключ, которым мы будем именовать данные.
// Можно в качестве него использовать любую строку
// на ваш вкус
var key = 'ruso_q_712899_example';

sendbtn.addEventListener('click', function() {
    window.localStorage[key] = data;
    getMessageFromLocalStorage();
});

// Приём сообщения
function getMessageFromLocalStorage() {
    result.textContent = window.localStorage[key];
}
window.addEventListener('storage', function(event) {
    if (event.key !== key) {
        return;  // Если прислали не наши данные, ничего не делаем
    }
    getMessageFromLocalStorage();
});

// Если какие-то данные уже лежат в сессии, отображаем
// их сразу после загрузки страницы
getMessageFromLocalStorage();
localStorage.clear();
