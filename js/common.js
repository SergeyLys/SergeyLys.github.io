//slow loader
$(window).load(function() { 
	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow"); 
});



$(document).ready(function() {
	//background height detection
	function heightDetect () {
		$(".main-head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

	
	//sandwich button animate
	$(".toggle-mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});
	//закрытие меню при клике на ссылку
	$(".top-mnu li a").click(function(){
		$(".top-mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top-text").removeClass('h_opacify');
	});

	//top menu background
	$(".toggle-mnu").click(function(){
		if ($(".top-mnu").is(":visible")) {
			$(".top-mnu").fadeOut(600);
			$(".top-mnu li a").removeClass('fadeInUp animated');
			$(".top-text").removeClass('h_opacify');
		}
		else {
			$(".top-mnu").fadeIn(600);
			$(".top-text").addClass('h_opacify');
			$(".top-mnu li a").addClass('fadeInUp animated');
		}
	});
	//popup
	$(".popup").magnificPopup({type:'image'});

	//block animation
	$(".sec-head").animated("fadeInUp","fadeOutDown");
	$(".hmlt").animated("fadeInLeft","fadeOutDown");
	$(".cross").animated("fadeInRight","fadeOutDown");
	$(".respon").animated("fadeInUp","fadeOutDown");
	$(".parallax-bg1").animated("fadeInRight","fadeOutDown");
	$(".parallax-bg2").animated("fadeInRight","fadeOutDown");
	$(".anim").animated("fadeInLeft","fadeOutLeft");
	$(".anim").animated("fadeInLeft","fadeOutLeft");
	$(".anim").animated("fadeInLeft","fadeOutLeft");
	$(".anim").animated("fadeInLeft","fadeOutLeft");
	$(".top-resume").animated("fadeInUp","fadeOutDown");
	$(".left-content").animated("fadeInLeft","fadeOutDown");
	$(".right-resume").animated("fadeInRight","fadeOutDown");
	$(".prev_button").animated("fadeInLeft","fadeOutLeft");
	$(".next_button").animated("fadeInRight","fadeOutRight");
	

	//scroll to id
	$(".top-mnu ul a").mPageScroll2id();


});

//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1
	});
	
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});
