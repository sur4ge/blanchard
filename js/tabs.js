window.addEventListener('DOMContentloaded', function() {
	document.querySelectorAll('.catalog__btn').forEach(function(tabsbtn) {
		tabsbtn.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path;
			
			document.querySelectorAll('.catalog__btn').forEach( function(tabContent) {
				tabContent.classList.remove('.catalog__active--tab')
			})
			document.querySelector('[data-target="${path}"]').classList.add('.catalog__content--active')
		})
	})
})