var item = document.getElementsByClassName('header-item');
// var menu = item[1].children[0].innerHTML.toLowerCase();
var menu;

for(var i = 0; i < item.length; i++) {
  menu = item[i].children[0].innerHTML.toLowerCase();
  if (location.href.includes(menu)) {
    item[i].children[0].className += " current-menu";
  }
}
