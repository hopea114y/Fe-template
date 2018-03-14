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
$("[data-fancybox]").fancybox({
	// Options will go here
});