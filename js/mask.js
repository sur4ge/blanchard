let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 999-999-99-99");
im.mask(selector);

new JustValidate('.contacts__form', {
	rules: {
		name: {
			required: true,
			minLenght: 6,
			maxLength: 35,
		},
		tel: {
			required: true,
			function: (name, value) => {
				const phone = selector.inputmask.unmaskedvalue()
				return Number(phone) && phone.length === 10
			 }
			},
		mail: {
			required: true,
			email: true
			}, 
		},
});