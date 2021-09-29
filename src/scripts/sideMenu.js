const openBtn = document.querySelector('.open-side-menu');
const html = document.querySelector('html');
const closeBtn = document.querySelector('.close-side-menu');
const header = document.querySelector('header');
const mask = document.querySelector('.mask');
const navMask = document.querySelector('.nav-mask');
const allNavLinks = document.querySelectorAll('header .nav-links');

function closeMenu() {
	html.style.overflowY = 'overlay';
	header.classList.remove('side-menu-active');
}

openBtn.addEventListener('click', () => {
	header.classList.add('side-menu-active');
	html.style.overflowY = 'hidden';

	closeBtn.addEventListener('click', closeMenu);

	mask.addEventListener('click', closeMenu);

	allNavLinks.forEach(item => {
		item.addEventListener('click', closeMenu);
	});
});

html.addEventListener('mousewheel', () => {
	if (window.scrollY > 600) {
		navMask.style.opacity = 1;
	} else {
		navMask.style.opacity = 0;
	}
});
