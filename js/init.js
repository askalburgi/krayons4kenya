(function($){
  $(function(){

	$('.button-collapse').sideNav();
	$('.parallax').parallax();

	// About Us
	$("#aboutScroll").click(function(){
		$("html, body").animate({scrollTop: $('#about').offset().top-$("nav").height()}, 2000)
	});

	// Our Story 
	$("#storyScroll").click(function(){
		$("html, body").animate({scrollTop: $('#story').offset().top-$("nav").height()}, 2000)
	});

	// Join Us
	$("#joinScroll").click(function(){
		$("html, body").animate({scrollTop: $('#join').offset().top-$("nav").height()}, 2000)
	});

	// Timeline
	$("#timelineScroll").click(function(){
		console.log("offset: " + $('#timeline').offset().top+435); 
		$("html, body").animate({"scrollTop": $('#timeline').offset().top + 435}, 2000)
		console.log("window: " + window.scrollY); 
		// $("body").animate({"scrollTop": window.scrollY+290}, 1000);
	});

	height = ($("#index-banner").height() - $(".image_captions").height())/2;
	$(".image_captions").css({'padding':height+'px 0'}); 


  }); // end of document ready
})(jQuery); // end of jQuery name space


function calcScrollr() {

	var _diff = 8;
	var _leftdiff = 0.45;
	var _startscrollat = $('#non-skrollr').height()+400;
	var _margin = 80;
	var _visibleatstart = false;
	var _hideatend = false;
	var $_e = $(".scroll-1");

	if ($_e.hasClass("blog")) {
		_diff = 10;
		_startscrollat = 0;
		_visibleatstart = true;
		_hideatend = false;
	}

	var cardht = 0;
	var totalht = _margin;
	var count = 0;
	var totalcount = 0;
	var dataval;



	$_e.each(function () {

		if (!_visibleatstart) {
			$_e.eq(totalcount).attr("data-" + (_startscrollat - 40), "opacity: 1");
			$_e.eq(totalcount).attr("data-" + (_startscrollat - 140), "opacity: 0");
			$_e.eq(totalcount).attr("data-" + (_startscrollat - 150), "display: block");
			$_e.eq(totalcount).attr("data-1", "opacity: 0");
			$_e.eq(totalcount).attr("data-0", "display: none");
		}


		totalcount++;
	});

	$_e.each(function () {
		if ((count + 1) % 2 == 0) {
			$_e.eq(count).find(".card").addClass("darken-1");
		}
		dataval = _startscrollat;
		var i = _margin;
		cardht = $(this).height();
		var temp = totalht;
		$_e.eq(count).attr("style", "top:" + (temp + count * _diff) + "px");
		$_e.eq(count).attr("style", "left:" + (50 - (totalcount * _leftdiff / 2) + (count * _leftdiff)) + "%");
		for (var j = 0; temp - _margin + count * _diff >= 0; j++) {
			$_e.eq(count).attr("data-" + dataval, "top:" + (temp + count * _diff) + "px");
			dataval = dataval + cardht;
			temp = temp - cardht;
		}
		
		totalht += cardht;
		i += cardht;
		
		if (_hideatend) {
			var endpos = _startscrollat + (totalcount * $_e.eq(0).height());
			$_e.eq(count).attr("data-" + (endpos - 129), "display: block");
			$_e.eq(count).attr("data-" + (endpos - 128), "opacity: 1");
			$_e.eq(count).attr("data-" + (endpos - 11), "display: none");
			$_e.eq(count).attr("data-" + (endpos - 22), "opacity: 0");
		}
		
		count++;
		
	});
}


var s;
$(function () {

	$("html").niceScroll({
		styler: "fb",
		scrollspeed: 100,
		mousescrollstep: 72
	});

	// $.scrolline({
	// 	reverse: false,
	// 	position: 'top',
	// 	backColor: '#2980b9',
	// 	frontColor: '#f1c40f',
	// 	weight: 5
	// });
});

$(function () {
		$(".button-collapse").sideNav();
	})
$(function () {

	if (Modernizr.history) {
		$("nav").delegate("a[internal]", "click", function () {
			event.preventDefault();
			_href = $(this).attr("href");
			history.pushState(null, null, _href);
			loadContent(_href);
		});
		$("body").delegate("button[href]", "click", function () {
			event.preventDefault();
			_href = $(this).attr("href");
			history.pushState(null, null, _href);
			loadContent(_href);
		});

		// set up some variables
		var $mainContent = $("#main-content"),
			$pageWrap = $("#page-wrap"),
			baseHeight = 0,
			$el;

		// calculate wrapper heights to prevent jumping when loading new content
		$pageWrap.height($pageWrap.height());
		baseHeight = $pageWrap.height() - $mainContent.height();

		function loadContent(href) {
			$mainContent.find("#guts").stop(true, true).fadeOut(600, function () { // fade out the content of the current page
				$(".preloader").fadeIn();
				$mainContent.hide().load(href + " #guts", function () { // load the contents of whatever href is
					$('html, body').animate({
						scrollTop: 0
					}, 800);

					$('ul.tabs').tabs();
					$mainContent.fadeIn(1000);


					calcScrollr();
					s = skrollr.init();
					s.refresh();

					$('html, body').animate({
						scrollTop: 10
					}, 50, function(){
						$(".preloader").fadeOut();
					});

				});
			});
		}
		$(window).bind("popstate", function () {
			link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
			loadContent(link);
		});
	} else {
		console.log("No support for in-page loading. Try using chrome.");
	}
});


//scrolltotop1
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});

//preloader hide on load
$(window).load(function () {

	$(".preloader").fadeOut();


	$('html, body').animate({
		scrollTop: 10
	}, 50);

	calcScrollr();
	s = skrollr.init();
});

function nextCard() {
	$("body").animate({"scrollTop": window.scrollY+805}, 1000);
	console.log("nextCard in action mudda baby");
	// return false;
	// return true;
}

function toCard() {
	$("body").animate({"scrollTop": window.scrollY+290}, 1000);
	console.log("toCard in action mudda baby");
	// return false;
	// return true;
}

// Nav bar style on position
$(window).scroll(function (event) {
	poop = $(window).scrollTop();
	// console.log("we here", poop);
	if (poop >= 1) {
		$("nav").addClass("fixed-nav");
	}
	if (poop < 1) {
		console.log("top");
		$("nav").removeClass("fixed-nav");
	}
});
