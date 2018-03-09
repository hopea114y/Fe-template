window.onload = function () {

	var btn = document.querySelectorAll('.about-btn');
	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = activeItem;
	}

	function activeItem() {
		var div = document.querySelectorAll('.about-item-img');
		for (var i = 0; i < btn.length; i++) {
			div[i].classList.toggle('about-item-img-active');
		}
	}

}

