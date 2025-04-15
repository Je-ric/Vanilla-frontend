const expandBtn = document.querySelector("[data-position ='expand_btn']");
const buttons = Array.from(document.querySelectorAll('[data-position]'));

expandBtn.addEventListener('click', () => {
  buttons.map(btn => {
  const pos = btn.dataset['position'];
  btn.classList.toggle(pos);
})
})
