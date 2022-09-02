const menuBtn = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu__list')

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
	})
}