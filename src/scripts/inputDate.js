const inputDate = document.querySelector('input[type="date"]');

const date = new Date();

const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
const year = date.getFullYear();

const today = `${year}-${month}-${day}`;
const maxDate = `${year}-12-31`;
inputDate.min = today;
inputDate.max = maxDate;

flatpickr(inputDate, { dateFormat: 'Y-m-d', minDate: today, maxDate });
