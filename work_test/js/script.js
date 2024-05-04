document.addEventListener('DOMContentLoaded', function () {
	const headerButton = document.querySelector('.header__button')
	const header = document.querySelector('.header')

	headerButton.addEventListener('click', function () {
		header.classList.toggle('active-header')
	})
})
