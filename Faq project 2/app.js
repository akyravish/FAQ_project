// jshint esversion:6

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		button.parentNode.classList.toggle('active');
	});
});
