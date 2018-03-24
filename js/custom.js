$(document).ready(function(){
  $(".owl-carousel.team-carousel").owlCarousel({
  	center: true,
  	loop: true,
  	items: 1,
  	nav: false,
  	navText: false,
  	smartSpeed: 700
  });
});

$(document).ready(function(){
  $(".owl-carousel.testimonial-carousel").owlCarousel({
  	center: true,
  	loop: true,
  	items: 3,
  	nav: false,
  	navText: false,
  	smartSpeed: 700
  });
});

$("[data-fancybox]").fancybox({
	// Options will go here
});

window.onload = function () {

	var btn = document.querySelectorAll('.about-btn');
	var div = document.querySelectorAll('.about-item-img');
	var rand = mtRand(0, div.length - 1);

	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = activeItem.call(div[rand]);
	}

	function activeItem() {
		this.classList.toggle('about-item-img-active');
	}

}

function mtRand(min, max) {
	return Math.floor(Math.random() * (max - min + 1));
}