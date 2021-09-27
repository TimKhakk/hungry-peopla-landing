const galImgs = document.querySelectorAll('.galerie img');
const imgSize = window.innerWidth / galImgs.length;

function resizeGalerie() {
	galImgs.forEach(img => {
		img.style.width = imgSize + 'px';
		img.style.height = imgSize + 'px';
	});
}
resizeGalerie();

window.addEventListener(
	'orientationchange',

	resizeGalerie
);
