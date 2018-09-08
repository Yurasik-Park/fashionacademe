// mark menu

var item = document.getElementsByClassName('header-item');
var menu;

for(var i = 0; i < item.length; i++) {
  menu = item[i].children[0].innerHTML.toLowerCase();
  if (location.href.includes(menu)) {
    item[i].children[0].className += " current-menu";
  }
}

// form for study

$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('.form__complete').animate({opacity: "1"}, 1000);
			$("#form").trigger("reset");
		});
		return false;
	});
	
	$("#poster-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "poster-phone.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('.form__complete').animate({opacity: "1"}, 1000);
			$("#poster-form").trigger("reset");
		});
		return false;
	});


// mobile menu


  $('.nav-line').click(function() {
    $('.navigation').toggleClass('navigation_active');
    $('.nav-close').css('display', 'block');
  });

  $('.nav-close').click(function() {
    $('.navigation').toggleClass('navigation_active');
    $('.nav-close').css('display', 'none');
  });

});

 // scroll

 $(function(){

	var $window = $(window);		//Window object

	var scrollTime = .5;			//Scroll time
	var scrollDistance = 250;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5
			});

	});

});

// for main slider

$(".portfolio > div:gt(0)").hide();

  setInterval(function() {
    $('.portfolio > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.portfolio');
  }, 15000);
