const $ = (selector) => document.querySelector(selector);

const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const period = $('.period');
const week = document.querySelector('.week');
const toggleBtn = document.querySelector('.toggle-format');

let showDot = true;
let is24Hour = false;

function update() {
  showDot = !showDot;
  const now = new Date();

  dot.classList.toggle('invisible', showDot);

  let hours = now.getHours();
  let displayPeriod = '';

  if (!is24Hour) {
    displayPeriod = hours >= 12 ? 'PM' : 'AM';
    if (hours === 0) hours = 12;
    else if (hours > 12) hours -= 12;
    period.textContent = displayPeriod;
    period.style.display = 'inline';
  } else {
    period.style.display = 'none';
  }

  hour.textContent = String(hours).padStart(2, '0');
  min.textContent = String(now.getMinutes()).padStart(2, '0');

  Array.from(week.children).forEach((ele) =>
    ele.classList.remove('active')
  );

  week.children[now.getDay()].classList.add('active');
}

toggleBtn.addEventListener('click', () => {
  is24Hour = !is24Hour;
});

setInterval(update, 500);
update();