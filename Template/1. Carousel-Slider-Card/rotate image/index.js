console.clear();
const slides = document.querySelectorAll('.slide');

slides.forEach((el, index) => {
  el.dataset.index = index;
})

document.querySelector('.scene').addEventListener('click', () => {
  const el = getCurrentSlide();
    const index = parseInt(el.dataset.index)
    el.dataset.current = false;
    
    const nextSlideIndex = (index + 1) % slides.length;
    slides[nextSlideIndex].dataset.current = true
  })

function getCurrentSlide() {
  return document.querySelector('[data-current="true"]')
}
