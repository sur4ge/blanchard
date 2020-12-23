ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.75787818355551,37.59973801501057],
                zoom: 15
            });
var myPlaceMark = new ymaps.Placemark([55.75787818355551,37.59973801501057], {}, {
	iconLayout: 'default#image',
	iconImageHref: 'img/location.svg',
	iconImageSize: [20, 20],
	iconImageOffet: [-3, -42]
});			
myMap.geoObjects.add(myPlaceMark); 
};


$("[data-scroll]").on("click", function(event) {
	event.preventDefault();
	let linkId = $(this).data('scroll');
	let blockOffset = $(linkId).offset().top;
	
	$("html, body").animate({
		scrollTop: blockOffset
	}, 500);
});

const multiDefault = () => {
	const elements = document.querySelectorAll('.gallery__select');
	elements.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
		});
	});
	
}
multiDefault();

const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2');
const slider3 = document.querySelector('.swiper-container3');

let mySwiper = new Swiper(slider, {
  direction: 'horizontal',
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
	
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',	  
 },	
 pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
	formatFractionCurrent: 1,
	formatFractionTotal: 5,
	renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + " / 5" + '</span>';
  }
 },
});

let mySwiper1 = new Swiper(slider1, {
  direction: 'horizontal',
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },
pagination: {
    el: '.swiper-pagination1',
    type: 'bullets',
	formatFractionCurrent: 1,
	formatFractionTotal: 5,
	renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + " / 3" + '</span>';
  }
 },
});

let mySwiper2 = new Swiper(slider2, {
  direction: 'horizontal',
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  navigation: {
  nextEl: '.swiper-button-prev-black',
  prevEl: '.swiper-button-next-black',
 },
});


let mySwiper3 = new Swiper(slider3, {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
  	


 $( function() {
    $( "#accordion" ).accordion({
		 collapsible: true,
		 heightStyle: "content",
	});
  } );
$( function() {
    var icons = {
      header: "ui-accordion-icons",
      activeHeader: "ui-accordion-active",
    };
    $( "#accordion" ).accordion({
      icons: icons
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion" ).accordion( "option", "icons", null );
      } else {
        $( "#accordion" ).accordion( "option", "icons", icons );
      }
    });
  } );

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#events-more').addEventListener('click', function(){
		document.querySelector('#events-item-4').classList.remove('hidden');
		document.querySelector('#events-item-5').classList.remove('hidden');
		document.querySelector('#events-more').classList.add('hidden');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#realism').addEventListener('click', function(){
		document.querySelector('.bar__selects').classList.toggle('hidden');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#imp').addEventListener('click', function(){
		document.querySelector('#imp-list').classList.toggle('hidden');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#post').addEventListener('click', function(){
		document.querySelector('#post-list').classList.toggle('hidden');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#ava').addEventListener('click', function(){
		document.querySelector('#ava-list').classList.toggle('hidden');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#fut').addEventListener('click', function(){
		document.querySelector('#fut-list').classList.toggle('hidden');
	});
});


window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-1').addEventListener('click', function(){
		document.querySelector('#cat-link-1').classList.toggle('catalog__active');
		document.querySelector('#cat-1').classList.remove('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-2').addEventListener('click', function(){
		document.querySelector('#cat-link-2').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.remove('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-3').addEventListener('click', function(){
		document.querySelector('#cat-link-3').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.remove('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-4').addEventListener('click', function(){
		document.querySelector('#cat-link-4').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.remove('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-5').addEventListener('click', function(){
		document.querySelector('#cat-link-5').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.remove('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-6').addEventListener('click', function(){
		document.querySelector('#cat-link-6').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.remove('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-7').addEventListener('click', function(){
		document.querySelector('#cat-link-7').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.remove('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-8').addEventListener('click', function(){
		document.querySelector('#cat-link-8').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.remove('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-9').addEventListener('click', function(){
		document.querySelector('#cat-link-9').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.remove('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-10').addEventListener('click', function(){
		document.querySelector('#cat-link-10').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.remove('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-11').addEventListener('click', function(){
		document.querySelector('#cat-link-11').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.remove('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-12').addEventListener('click', function(){
		document.querySelector('#cat-link-12').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.remove('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-13').addEventListener('click', function(){
		document.querySelector('#cat-link-13').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.remove('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-14').addEventListener('click', function(){
		document.querySelector('#cat-link-14').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.remove('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-15').addEventListener('click', function(){
		document.querySelector('#cat-link-15').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.remove('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-16').addEventListener('click', function(){
		document.querySelector('#cat-link-16').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.remove('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-17').addEventListener('click', function(){
		document.querySelector('#cat-link-17').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.remove('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-18').addEventListener('click', function(){
		document.querySelector('#cat-link-18').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.remove('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-19').addEventListener('click', function(){
		document.querySelector('#cat-link-19').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.remove('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-20').addEventListener('click', function(){
		document.querySelector('#cat-link-20').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.remove('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-21').addEventListener('click', function(){
		document.querySelector('#cat-link-21').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.remove('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-22').addEventListener('click', function(){
		document.querySelector('#cat-link-22').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.remove('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-23').addEventListener('click', function(){
		document.querySelector('#cat-link-23').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.remove('hidden');
		document.querySelector('#cat-24').classList.add('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
		document.querySelector('#cat-link-24').classList.remove('catalog__active');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#cat-link-24').addEventListener('click', function(){
		document.querySelector('#cat-link-24').classList.add('catalog__active');
		document.querySelector('#cat-1').classList.add('hidden');
		document.querySelector('#cat-2').classList.add('hidden');
		document.querySelector('#cat-3').classList.add('hidden');
		document.querySelector('#cat-4').classList.add('hidden');
		document.querySelector('#cat-5').classList.add('hidden');
		document.querySelector('#cat-6').classList.add('hidden');
		document.querySelector('#cat-7').classList.add('hidden');
		document.querySelector('#cat-8').classList.add('hidden');
		document.querySelector('#cat-9').classList.add('hidden');
		document.querySelector('#cat-10').classList.add('hidden');
		document.querySelector('#cat-11').classList.add('hidden');
		document.querySelector('#cat-12').classList.add('hidden');
		document.querySelector('#cat-13').classList.add('hidden');
		document.querySelector('#cat-14').classList.add('hidden');
		document.querySelector('#cat-15').classList.add('hidden');
		document.querySelector('#cat-16').classList.add('hidden');
		document.querySelector('#cat-17').classList.add('hidden');
		document.querySelector('#cat-18').classList.add('hidden');
		document.querySelector('#cat-19').classList.add('hidden');
		document.querySelector('#cat-20').classList.add('hidden');
		document.querySelector('#cat-21').classList.add('hidden');
		document.querySelector('#cat-22').classList.add('hidden');
		document.querySelector('#cat-23').classList.add('hidden');
		document.querySelector('#cat-24').classList.remove('hidden');
		
		document.querySelector('#cat-link-2').classList.remove('catalog__active');
		document.querySelector('#cat-link-3').classList.remove('catalog__active');
		document.querySelector('#cat-link-4').classList.remove('catalog__active');
		document.querySelector('#cat-link-5').classList.remove('catalog__active');
		document.querySelector('#cat-link-6').classList.remove('catalog__active');
		document.querySelector('#cat-link-7').classList.remove('catalog__active');
		document.querySelector('#cat-link-8').classList.remove('catalog__active');
		document.querySelector('#cat-link-9').classList.remove('catalog__active');
		document.querySelector('#cat-link-10').classList.remove('catalog__active');
		document.querySelector('#cat-link-11').classList.remove('catalog__active');
		document.querySelector('#cat-link-12').classList.remove('catalog__active');
		document.querySelector('#cat-link-13').classList.remove('catalog__active');
		document.querySelector('#cat-link-14').classList.remove('catalog__active');
		document.querySelector('#cat-link-15').classList.remove('catalog__active');
		document.querySelector('#cat-link-16').classList.remove('catalog__active');
		document.querySelector('#cat-link-17').classList.remove('catalog__active');
		document.querySelector('#cat-link-18').classList.remove('catalog__active');
		document.querySelector('#cat-link-19').classList.remove('catalog__active');
		document.querySelector('#cat-link-20').classList.remove('catalog__active');
		document.querySelector('#cat-link-21').classList.remove('catalog__active');
		document.querySelector('#cat-link-22').classList.remove('catalog__active');
		document.querySelector('#cat-link-23').classList.remove('catalog__active');
		document.querySelector('#cat-link-1').classList.remove('catalog__active');
	});
});







