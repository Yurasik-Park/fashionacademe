var item = document.getElementsByClassName('header-item');
var menu;

for(var i = 0; i < item.length; i++) {
  menu = item[i].children[0].innerHTML.toLowerCase();
  if (location.href.includes(menu)) {
    item[i].children[0].className += " current-menu";
  }
}
$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

});
