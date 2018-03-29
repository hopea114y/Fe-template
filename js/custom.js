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

// initMap() - функция инициализации карты
function initMap() {
	// Скрываем стандартные метки
	directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
	// Координаты центра на карте
	var centerLatLng = new google.maps.LatLng(52.214321, 24.027835);
	// Координаты метки на карте
	var point = new google.maps.LatLng(52.214321, 24.027835);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 16               // Зум по умолчанию. Возможные значения от 0 до 21
	};
	// Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	// Кастомный маркер
	var image = new google.maps.MarkerImage('E:/work/fe/img/Shape-26.png',
                    new google.maps.Size(150, 150),
                    new google.maps.Point(0,0),
                    new google.maps.Point(18, 42)
                );
	// Создание метки на карте
	var marker = new google.maps.Marker({
	    position: point,
	    map: map,
	    icon: image,
	    title: 'Zelenkovshizna',
	    draggable: false,
    	animation: google.maps.Animation.DROP
  });
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);