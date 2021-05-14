// jshint esversion:6

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		const parent = btn.parentNode;
		parent.classList.toggle('active');
	});
});
