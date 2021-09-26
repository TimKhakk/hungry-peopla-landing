const inputTime = document.querySelector('input[type="time"]');

flatpickr(inputTime, {
	enableTime: true,
	noCalendar: true,
	dateFormat: 'H:i',
	minTime: '8:00',
	maxTime: '22:00',
});
