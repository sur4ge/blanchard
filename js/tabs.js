window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#fr').addEventListener('click', function(){
		document.querySelector('#active-2').classList.add('hidden');
		document.querySelector('#active-3').classList.add('hidden');
		document.querySelector('#active-4').classList.add('hidden');
		document.querySelector('#active-5').classList.add('hidden');
		document.querySelector('#active-1').classList.toggle('hidden');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#ger').addEventListener('click', function(){
		document.querySelector('#active-1').classList.add('hidden');
		document.querySelector('#active-3').classList.add('hidden');
		document.querySelector('#active-4').classList.add('hidden');
		document.querySelector('#active-5').classList.add('hidden');
		document.querySelector('#active-2').classList.toggle('hidden');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#it').addEventListener('click', function(){
		document.querySelector('#active-1').classList.add('hidden');
		document.querySelector('#active-2').classList.add('hidden');
		document.querySelector('#active-4').classList.add('hidden');
		document.querySelector('#active-5').classList.add('hidden');
		document.querySelector('#active-3').classList.toggle('hidden');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#ru').addEventListener('click', function(){
		document.querySelector('#active-1').classList.add('hidden');
		document.querySelector('#active-2').classList.add('hidden');
		document.querySelector('#active-3').classList.add('hidden');
		document.querySelector('#active-5').classList.add('hidden');
		document.querySelector('#active-4').classList.toggle('hidden');
	});
});

window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#bel').addEventListener('click', function(){
		document.querySelector('#active-1').classList.add('hidden');
		document.querySelector('#active-2').classList.add('hidden');
		document.querySelector('#active-3').classList.add('hidden');
		document.querySelector('#active-4').classList.add('hidden');
		document.querySelector('#active-5').classList.toggle('hidden');
	});
});