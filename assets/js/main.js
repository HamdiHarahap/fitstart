const bio = document.querySelector('.bio');
const bioContent = document.querySelector('.bio .bio-content');
bio.addEventListener('click', () => {
	bio.classList.toggle('hidden');
	bioContent.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
	if (!bio.contains(event.target)) {
		bio.classList.add('hidden');
		bioContent.classList.add('hidden');
	}
});

const menuIcon = document.querySelector('.menu-icon');
const menuItem = document.querySelector('.nav-item');

menuIcon.addEventListener('click', () => {
	menuItem.classList.toggle('flex');
	menuItem.classList.toggle('none');
});
