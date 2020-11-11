const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoBtn = document.querySelector(
  '.modal__action.modal__action--negative'
);

Array.from(selectPlanButtons).forEach((el) => {
  el.addEventListener('click', openModal);
});
modalNoBtn.addEventListener('click', closeModal);
