  var place = document.getElementsByClassName('img-prof');
  var result = document.getElementById('result');
  var placeName = document.getElementById('profile-name');
  var key = 'ruso_q_712899_example';
  var b, z;
  var $x;

  // Приём сообщения
  function getMessageFromLocalStorage() {
    b = window.localStorage[key].split(',');
    result.textContent = b[1];
    placeName.textContent = b[2];
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
// 
// for (var i = 0; i <= 7; i++) {
//         place[i].src = "img/profile/" + b[0] + "/" + [i + 1] + ".jpg";
// }
  // place[0].src = "img/profile/" + b[0] + "/" + "1.jpg";
  // place[1].src = "img/profile/" + b[0] + "/" + "2.jpg";
  // place[2].src = "img/profile/" + b[0] + "/" + "3.jpg";
  // place[3].src = "img/profile/" + b[0] + "/" + "4.jpg";
  // place[4].src = "img/profile/" + b[0] + "/" + "5.jpg";
  // place[5].src = "img/profile/" + b[0] + "/" + "6.jpg";
  // place[6].src = "img/profile/" + b[0] + "/" + "7.jpg";
  // place[7].src = "img/profile/" + b[0] + "/" + "8.jpg";
