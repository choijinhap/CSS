const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

backdrop.addEventListener('click', () => {
  this.closeModal();
  mobileNav.classList.remove('open');
});

function openModal() {
  modal.classList.add('open');
  backdrop.classList.add('open');
}
function closeModal() {
  modal.classList.remove('open');
  backdrop.classList.remove('open');
}

toggleBtn.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
