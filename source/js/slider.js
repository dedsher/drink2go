const slider = document.querySelector('.slider');
const sliderFromField = document.querySelector('.filters__price-field--from');
const sliderToField = document.querySelector('.filters__price-field--to');


noUiSlider.create(slider, {
	range: {
			'min': 0,
			'max': 1000
	},
	start: [0, 900],
	step: 1,
	connect: true,
	format: {
		from: function(value) {
			return parseFloat(value);
		},
		to: function(value) {
			if (Number.isInteger(value)) {
				return value.toFixed(0);
			}

			return value.toFixed(0);
		}
	}
})

// Слушаем событие изменения слайдера
slider.noUiSlider.on('update', function (values, handle) {
	var range = slider.noUiSlider.get();

	sliderFromField.value = range[0];
	sliderToField.value = range[1];
});
