const galImgs = document.querySelectorAll('.galerie img');
const imgSize = window.innerWidth / galImgs.length;

function resizeGalerie() {
	if (window.screen.width < 1000) {
		galImgs.forEach((item, i) => {
			if (i === 0 || i === galImgs.length - 1) {
				item.style.display = 'none';
			}
		});

		galImgs.forEach(img => {
			img.style.width = window.innerWidth / 4 + 'px';
			img.style.height = window.innerWidth / 4 + 'px';
		});
	} else {
		galImgs.forEach(img => {
			img.style.width = imgSize + 'px';
			img.style.height = imgSize + 'px';
		});
	}
}
resizeGalerie();

window.addEventListener('change', resizeGalerie);
