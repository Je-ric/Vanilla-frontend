
const $ = (selector) => document.querySelector(selector);

const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const week = document.querySelector('.week');
let showDot = true;

function update() {
  showDot = !showDot;
  const now = new Date();

  dot.classList.toggle('invisible', showDot);

  let hours = now.getHours();
let period = 'AM';

if (hours >= 12) {
    period = 'PM';
}
if (hours === 0) {
    hours = 12;
} else if (hours > 12) {
    hours -= 12;
}

hour.textContent = String(hours).padStart(2, '0');

  min.textContent = String(now.getMinutes()).padStart(2, '0');

  Array.from(week.children).forEach((ele) =>
    ele.classList.remove('active')
  );

  week.children[now.getDay()].classList.add('active');
}

setInterval(update, 500);
update(); // initialize on load