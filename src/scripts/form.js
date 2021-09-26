const formForBook = document.querySelector('.book-table');
const formForMsg = document.querySelector('.send-msg');

const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal-window');
const allCloseModal = document.querySelectorAll('.close-modal');
const modalSubtitle = document.querySelector('#modal-subtitle');
const modalText = document.querySelector('#modal-text');

function closeModalWindow() {
	modal.classList.remove('active');

	modal.removeEventListener('click', closeModalWindow);
	allCloseModal.forEach(item => {
		item.removeEventListener('click', closeModalWindow);
	});
}

function openModalWindow() {
	modal.classList.add('active');
	modalWindow.addEventListener('click', e => {
		e.stopPropagation();
	});
	modal.addEventListener('click', closeModalWindow);
	allCloseModal.forEach(item => {
		item.addEventListener('click', closeModalWindow);
	});
}

const postData = async info => {
	const url = 'https://jsonplaceholder.typicode.com/posts';

	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(info),
	});

	if (!response.ok) {
		alert('Произошла ошибка');
		throw new Error(response.status);
	}

	openModalWindow();
};

async function formListener(form) {
	form.addEventListener('submit', async e => {
		e.preventDefault();

		if (form === formForBook) {
			modalSubtitle.textContent = 'The reservation was successfully processed';
		} else if (form === formForMsg) {
			modalSubtitle.textContent = 'The message sent';
		}
		let data = {};

		for (const { name, value } of form.elements) {
			if (name) {
				data[name] = value;
			}
		}

		await postData(data);
		form.reset();
	});
}

formListener(formForBook);
formListener(formForMsg);
