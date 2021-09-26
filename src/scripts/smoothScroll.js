const navLinks = document.querySelectorAll('.nav-links');
const exploreBtn = document.querySelector('#explore');
const bookTableBtn = document.querySelector('#book-table');
const nextBtn = document.querySelector('#next');

const smoothScroll = e => {
	e.preventDefault();

	const ID = e.target.getAttribute('href').substr(1);

	document.getElementById(ID).scrollIntoView({
		behavior: 'smooth',
		block: 'center',
	});
};

const uniqueScroll = (btn, to) => {
	btn.addEventListener('click', e => {
		e.preventDefault();
		document.getElementById(to).scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	});
};

const smoothScrollListener = btn => {
	btn.addEventListener('click', smoothScroll);
};

navLinks.forEach(link => {
	smoothScrollListener(link);
});

uniqueScroll(exploreBtn, 'menu');
uniqueScroll(bookTableBtn, 'book');
uniqueScroll(nextBtn, 'about');
