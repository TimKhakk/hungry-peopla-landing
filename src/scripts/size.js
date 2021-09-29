const sizeRef = document.querySelector('.size');

const width = window.screen.width;
const height = window.screen.height;
const sizeText = `${width} x ${height}`;

sizeRef.textContent = sizeText;
