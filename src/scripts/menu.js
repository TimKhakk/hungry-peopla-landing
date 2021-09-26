const menusItems = document.querySelector('.menus-items');
const menuBtns = document.querySelectorAll('.menuBtn');

const prices = [
	'96,27',
	'5,84',
	'10,94',
	'60,33',
	'13,10',
	'52,76',
	'5,47',
	'57,10',
	'78,27',
	'79,50',
	'53,53',
	'30,90',
	'72,70',
	'44,55',
	'98,0',
	'70,15',
	'96,8',
	'19,7',
	'19,36',
	'47,15',
	'5,91',
];

let selectedMenu = 'pizza';

menuBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		console.log(e.target.textContent);
		selectedMenu = e.target.textContent;
		renderProducts(selectedMenu);
	});
});

const renderProducts = text => {
	menusItems.textContent = '';
	for (let i = 0; i < 21; i++) {
		menusItems.insertAdjacentHTML(
			'beforeend',
			`
        <div class="item">
          <p class="item-name">${text.toUpperCase()} QUATRO STAGIONI . . . .</p>
          <p class="item-price">${prices[i]} USD</p>
          <p class="item-subtitle">Integer ullamcorper neque eu purus euismod</p>
        </div>
      `
		);
	}
};

renderProducts(selectedMenu);
