const labels = document.querySelectorAll('label');

labels.forEach(label => {
	const input = label.querySelector('.check');

	input.addEventListener('input', () => {
		if (input.value === '') {
			console.log('');
		} else {
			label.querySelector('.placeholder').style.display = 'none';
		}
	});
});
